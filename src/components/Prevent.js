import React from "react";
import { showWarning } from "./showWarning";
import { clearInfo } from "./clearInfo";

export function Prevent() {
  document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== '') {
      clearInfo()
      showWarning('Loading...')

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=54571c872228726c0905d0d5728ca0c2&units=metric&lang=pt_br`

      let results = await fetch(url)
      let json = await results.json()

      if(json.cod === 200) {
        showInfo({
          name: json.name,
          country: json.sys.country,
          temp: json.main.temp,
          tempIcon: json.weather[0].icon,
          windSpeed: json.wind.speed,
          windAngle: json.wind.deg
        })
      } else {
        clearInfo()
        showWarning('We couldnt find this location.')
      }
    } else {
      clearInfo()
    }
  })
}