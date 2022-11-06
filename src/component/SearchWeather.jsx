import React, { useEffect, useState } from "react";
//import sunset from './sunset.jpg'
import axios from'axios';


 function SearchWeather(){
    const api='bf97b1c22d67c70280b106b3be656a80';
    const[data,setData]=useState({})
    const [inputcity,setInputCity]=useState("")


    const weather=(city) => {
        if(!city) return
        const apiUrl='https://api.openweathermap.org/data/2.5/weather?q='+city+"&appid="+api
        axios.get(apiUrl).then((res)=>{
            console.log('response',res)
            setData(res.data)
          }).catch((err)=>{
            console.log("error")
          })
    }

    const handleChangeInput=(e)=>{
        setInputCity(e.target.value)
        }

    const handlesearch=()=> {
        weather(inputcity)
      }

    useEffect(()=>{
        weather("tetouan")
        },[])


    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div >
                        <div className="card text-white text-center border-0">
                            <img
                                src='/sunset2.jpg'
                                class="card-img"
                                
                                alt="probleme "
                            />
                            <div class="card-img-overlay">
                                <form>
                                    <div class="input-group mb-3  w-75 mx-auto">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Search for a city"
                                            aria-label="Search city"
                                            aria-describedby="basic-addon2"
                                            onChange={handleChangeInput}
                                            value={inputcity}
                                        />
                                        <button type="button" 
                                        class="input-group-text"
                                         id="basic-addon2 "
                                         onClick={handlesearch}
                                        >
                                        <i className="bi bi-search-heart"></i>
                                        </button>
                                    </div>
                                </form>


                                <div className="bg-dark bg-opacity-50 py-3">
                                <h4 class="card-title">{data.name}</h4>
                                <p class="card-text Lead">
                                    Saturday , November 14,2022 
                                    <p></p>
                                </p>
                                <hr/>
                                <i className="fas fa-cloud fa-4x"></i>
                                <h1 className="fw-bolder mb-5"> {((data?.main?.temp)-273.151).toFixed(2)} &deg; C</h1>
                               <p></p>
                                <p className="lead fw-bolder mb-0"> </p>
                                    <p className="lead">{((data?.main?.temp_min)-273.15).toFixed(2)} &deg;C | {((data?.main?.temp_max)-273.15).toFixed(2)} &deg;C </p>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )};
export default SearchWeather