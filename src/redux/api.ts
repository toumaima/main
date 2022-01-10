 
 import axios from 'axios';

 const YOUR_APP_ID='';//add your id after creating your own app in the recipe api
 const YOUR_APP_KEY='';//add your key after creating your own app in the recipe api
 

 export const getRecipe = async (query: any) =>{ 
    const url :any= `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`; 
    const result = await axios.get(url);
    console.log("result", result);
    return result ;
};