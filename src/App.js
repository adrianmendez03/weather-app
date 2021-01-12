import React, { useState } from 'react'
import './App.css';

import Form from './components/Form'
import WeatherDisplay from './components/WeatherDisplay'

function App() {

  const APIKEY = "556a50124042064645f2068309071fa6"

  const [weather, setWeather] = useState(null)

  const fetchWeather = async (zipCode) => {
    if (zipCode === "") { zipCode = "77084" }
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${APIKEY}`)
    const data = await response.json()
    setWeather({
      ...data
    })
  }

  return weather ? (
    <div className="App">
      <Form fetchWeather={fetchWeather}/>
      <WeatherDisplay weather={weather}/>
    </div>
  ) : <Form fetchWeather={fetchWeather}/>
}

export default App;
