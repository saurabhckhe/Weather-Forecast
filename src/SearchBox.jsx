import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "82bb0501717f0a639b5cc9137eb04752";

  const getWeatherInfo = async () => {
    try{
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    const result = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelslike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    return result;
    }catch(err){
      throw err;
    }  
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    try{
      evt.preventDefault();
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
    setCity("");
    }catch(err){
      setError("true");
    }
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
        {error && <p style={{color:"red"}}>No such place exist!</p>}
      </form>
    </div>
  );
}
