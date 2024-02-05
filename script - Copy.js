const api={
    key:"f6bf196015464b5fb8273e5522911cfc",
    base:"https://api.openweathermap.org/data/2.5/",
    base1: "https://api.openaq.org/v1/measurements"
}

let o3V = document.querySelector('air-parameters .o3')
let coV = document.querySelector('air-parameters .co')
let so2V = document.querySelector('air-parameters .s02')
let no2V = document.querySelector('air-parameters .n02')
let pm10V = document.querySelector('air-parameters .pm10')
let pm25V = document.querySelector('air-parameters .pm25')

let o3T = document.querySelector('air-parameters .o3-time')
let coT = document.querySelector('air-parameters .co-time')
let so2T = document.querySelector('air-parameters .s02-time')
let no2T = document.querySelector('air-parameters .n02-time')
let pm10T = document.querySelector('air-parameters .pm10-time')
let pm25T = document.querySelector('air-parameters .pm25-time')

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypass', setQuery);

