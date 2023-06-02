import React, { useState } from 'react'
import axios from 'axios'
import ShowTemp from './ShowTemp'

function Weather() {
    const [city, setCity] = useState("")
    const [data, setData] = useState({
        description: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: "",
    })

    const handleClick = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c412e32f8374f6a87ce341d095a159f6`)
            .then((response) => {
                setData({
                    description: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    country: response.data.sys.country,
                })
            })
    }
    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString('defalut', { month: 'long' });
    let day = d.toLocaleString('degalut', { weekday: 'long' });

    let time = d.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return (
        <>
            <div className='bg_img'>
                <div className='container text-center my-2 '>
                    <h1>Weather App Using React JS</h1>
                    <input type="text" className="mt-1" placeholder='Search City...' value={city} onChange={(e) => {
                        setCity(e.target.value);
                    }} />
                    <button className='btn btn-success btn-sm mx-2 active ' type='submit' onClick={handleClick}>Search</button>
                    <div class="col-md-12 d-flex justify-content-center mt-2">
                        <div class="card bg-dark bg-opacity-25 mx-auto ">
                            <div class="card-body ">
                                <h5 class="card-title text-white">Time & Date</h5>
                                <p class="card-text lead mt-4  text-white">
                                    {day} - {date} {month} - {year}
                                    <br />
                                    {time}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <ShowTemp text={data}></ShowTemp>
            </div>

        </>
    )
}

export default Weather;