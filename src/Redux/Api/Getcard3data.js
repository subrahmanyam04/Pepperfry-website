import axios from "axios";
import { BASE_URL } from "./Commonapi";

import { Params, useParams } from "react-router-dom";


export const Getcard3Data = async () => {
  // const params = useParams();
    try {
        
      const response = await axios.get(`${BASE_URL}/card3.json`);
      console.log('i am response',response)
      const jsonData = response.data;
             console.log('i am json', jsonData)
            //  console.log("i am params in api getcard3 page",params.id)  
      if (jsonData === null) {
        return [];
      } else {
        return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        
        
      }
    } catch (error) {
      console.log('error occured')
    }

    
  };