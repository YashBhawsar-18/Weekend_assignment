import './App.css'
import Login from './components/Login/Login'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
// import EmployCreation from './components/Creation/EmployCreation';
import EmployDetails from './components/EmployDetails/EmployDetails';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import EmployList from './components/EmployList/EmployList';
import Logout from './components/logout/Logout';
import Header from './components/logout/Header';


const queryClient = new QueryClient()


function App() {


  const token = localStorage.getItem("Token")
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          
            <Route element={<ProtectedRoute/>}>
                <Route element={<Header/>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employdetails/:id" element={<EmployDetails />} />
                <Route path="/employlist" element={<EmployList />} />
                </Route>
              </Route>
           

          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App
