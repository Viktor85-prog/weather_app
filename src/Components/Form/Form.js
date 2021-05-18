import React from 'react';

const API_key='0d56ed01b42743ed94fbfe658c541709'
// https://api.openweathermap.org/data/2.5/onecall?lat=53.195873&lon=50.100193&appid=0d56ed01b42743ed94fbfe658c541709
const lat='53.195873'
const lon='50.100193'
const part = ''



let gettingWeather = async (e) => {
    e.preventDefault();
    const api_url = await 
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_key}`)
    const data = await api_url.json();
    console.log(data)
  }


function Form () {
    return (
        <form 
        // action='`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_key}`' method='get'
        enctype="multipart/form-data"
        onSubmit={gettingWeather} >
            {/* <button>ok</button> */}
            <select onClick={gettingWeather} name="city">
                <option disabled selected>Select city</option>
                <option  value="Samara">Самара</option>
                <option value="Toliatty">Тольятти</option>
                <option value="Saratou]v">Саратов</option>
                <option value="Kazan">Казань</option>
                <option value="Krasnodar">Краснодар</option>
            </select>
        </form>
    );
}

export default Form;
