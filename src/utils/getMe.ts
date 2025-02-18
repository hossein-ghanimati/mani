import axios from "axios";
import { getLocalStorage } from "./util"


const getMe =async() =>{
   const userToken = getLocalStorage('userToken');

   if (!userToken){
      return undefined
   }
  
  let user =await axios.get('http://localhost:4000/v1/auth/me',{
      headers: {"Authorization" : `Bearer ${userToken}`}
   }).then(data=>data.data)

   return [user,userToken]
   
  }

export {getMe}