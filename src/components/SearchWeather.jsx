import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

const SearchWeather = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Indore")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=65d3cf7625f50bd0d3fd6858860a7f80`
            const response = await fetch(url);
            const resJson = await response.json()
            setCity(resJson.main)
            setCity(resJson.main)
        }
        fetchApi();
    }, [search])

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
        <div className='container mt-5  '>
            <div className='row justify-content-center '>
                <div className='col-md-4 '>
                    <div class="card text-bg-dark ">
                        <img src="https://source.unsplash.com/600x900/?nature,water" class="card-img " alt="..." />
                        <div class="card-img-overlay">
                            <form>
                                <div class="input-group mb-2 w-75 mx-auto">
                                    <input type="search" onChange={(e) => { setSearch(e.target.value) }} value={search} class="form-control" placeholder="Search city" aria-describedby="basic-addon2" />
                                </div>
                            </form>
                            {!city ? (
                                <p>No data found</p>
                            ) :
                                (
                                    <div className='bg-dark bg-opacity-50  py-2'>
                                        <h2 class="card-title">{search}</h2>
                                        <p class="card-text lead ">
                                            {day},{date} {month},{year}
                                            <br />
                                            {time}
                                        </p>
                                        <hr />
                                        <FontAwesomeIcon icon={faCloud}>
                                        </FontAwesomeIcon>
                                        <h1 className='fw-bolder md-5'>{city.temp} &deg;C</h1>
                                        <p className='lead fw-bolder mb-0'>Humidity:{city.humidity}</p>
                                        <p className='lead'>Min: {city.temp_min} | Max: {city.temp_max}</p>
                                        <p className='lead'>Feels: {city.feels_like} | Pressure: {city.pressure}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchWeather