import React, { useState } from 'react'
import {FetchWeather} from './api/FetchWeather';
import './App.css'

function App() {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search =  async (e) => {
        if(e.key === 'Enter'){
            const data = await FetchWeather(query)
            setWeather(data)
        }
        
    }
    
    return ( 
        <div className="main-container">
            <input type="text" 
            className=' search'
            placeholder='search...'
            value={query}
            onChange = {(e)=> setQuery(e.target.value)}
            onKeyDown = {search}
            />

            {
                weather.main && (
                    <div className="city">
                        <h1 className='city-name'>
                            <span>{weather.name}  <sup>{weather.sys.country}</sup></span>
                        </h1>
                        <div className="city-temp">
                            <h1>{Math.round(weather.main.temp)} 
                            <sup> &deg; C </sup></h1>
                        </div>

                        <div className="info">
                            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />

                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                    
                )
            }
        </div>
     );
}

export default App;