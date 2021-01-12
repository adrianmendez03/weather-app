import React from 'react';

const WeatherDisplay = ({ weather }) => {

    const kelvinToFahrenheight = temp => {
        return Math.floor((temp - 273.15) * (9 / 5) + 32)
    }



    return (
        <div className="weather-container">
            <h2 className="city">{weather?.name}</h2>
            <div className="weather-main">
                <div className="main-left">
                    <div className="description">{weather?.weather[0].description}</div>
                    <div className="temp">{kelvinToFahrenheight(weather?.main.temp)}&#176;</div>
                </div>
                <div className="main-right">
                    <div className="temp-min-max">{kelvinToFahrenheight(weather?.main.temp_max)}&#176;</div>
                    <div></div>
                    <div className="temp-min-max">{kelvinToFahrenheight(weather?.main.temp_min)}&#176;</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay