import instance from "../../Api/instance";


const BASE_URL = "https://67f32dc9ec56ec1a36d51764.mockapi.io/entries/entries";

export const addEmploy = async (entry) => {
  try{
    const response = await instance.post(BASE_URL, entry);
    console.log("Resoponse:", response)
    return response.data;
  }catch(e){
      console.log("api Error")
  }
  
};

export const getEntries = async () => {
  const response = await instance.get(BASE_URL);
  return response.data;
}

export const getSingleEmploy = async (id) => {
  console.log("id: on get ",id)
  const response = await instance.get(`${BASE_URL}/${id}`);
  console.log(response)
  return response.data;
};