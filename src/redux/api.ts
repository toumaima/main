 
 import axios from 'axios';

 const YOUR_APP_ID='';
 const YOUR_APP_KEY='';
 

 export const getRecipe = async (query: any) =>{ 
    const url :any= `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`; 
    console.log(url);
    const result = await axios.get(url);
    console.log("result", result);
    return result ;
};