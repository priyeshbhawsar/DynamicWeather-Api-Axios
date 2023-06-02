import React from 'react'

function ShowTemp({ text }) {
    return (
        <div class="container my-5">
            <div class="row mb-2 justify-content-center">
                <div class="col ">
                    <div class="card bg-dark bg-opacity-25">
                        <div class="card-body">
                            <h5 class="card-title text-white">Description</h5>
                            <p class="card-text text-white">-{text.description}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card bg-dark bg-opacity-25">
                        <div class="card-body">
                            <h5 class="card-title text-white">Temp</h5>
                            <p class="card-text text-white">{text.temp} &deg;C</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card bg-dark bg-opacity-25">
                        <div class="card-body">
                            <h5 class="card-title text-white">Temp Min</h5>
                            <p class="card-text text-white">{text.temp_min} &deg;C</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card bg-dark bg-opacity-25">
                        <div class="card-body">
                            <h5 class="card-title text-white">Temp Max</h5>
                            <p class="card-text text-white">{text.temp_max} &deg;C</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card bg-dark bg-opacity-25">
                        <div class="card-body">
                            <h5 class="card-title text-white">Humidity</h5>
                            <p class="card-text text-white">{text.humidity}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card bg-dark bg-opacity-25">
                        <div class="card-body">
                            <h5 class="card-title text-white">Country</h5>
                            <p class="card-text text-white">-{text.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowTemp;