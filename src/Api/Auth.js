import axios from 'axios';

const instance = axios.create({
    
    baseURL:"https://dummyjson.com"
})


const auth = async(username, password) => {
    try{
        // const email = "emily.johnson@x.dummyjson.com";
        // const password = "emilyspass";
        const response = await instance.post("/auth/login", username, password);
        console.log("response :",response.data);
        // localStorage.setItem("Token", accessToken);
        // console.log(Token)
        return response.data;
    }catch(e) {
        console.log("auth ka error",error);
    }
    
}

export default auth;