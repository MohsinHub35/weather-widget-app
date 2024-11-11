import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import "./Searchbox.css";

export default function Searchbox({update}){
    let [City,setCity]=useState("");
    let[error,setError]=useState(false);
    let Api_url="https://api.openweathermap.org/data/2.5/weather";
    let api_key="f146f117125dcca6b950421b97544ac9";

    let getweatherInfo= async ()=>{
       try{
        let response= await fetch(`${Api_url}?q=${City}&appid=${api_key}&units=metric`);
       let jsonResponse= await response.json();
      
       let result = {
        city:City,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;

       }catch(err){
        throw err;
       }
    };


    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async (event)=>{
       try{
        event.preventDefault();
        console.log(City);
        setError(false);
        
        let info = await getweatherInfo();
        update(info);
        setCity("");
       }
       catch(err){
          setError(true);
       }
    }
    return(
    <div className="mainDiv">
        
          <form onSubmit={handleSubmit}>
          <TextField id="city" label="City" variant="outlined"
          value={City} onChange={handleChange} required /> 
         <br></br> <br></br>
         <Button variant="contained" type="submit">Search</Button> 
         {error && <p style={{color:"red"}}>No Such place Exists!!</p>}
         </form> 
          

    </div>
    );
}