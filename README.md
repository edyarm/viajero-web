# Viajero-Web

[![Version](https://img.shields.io/npm/v/esri-loader.svg?style=flat-square)](https://www.npmjs.com/package/esri-loader)
[![build status][travis-img]][travis-url]

[travis-img]: https://img.shields.io/travis/Esri/esri-loader/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/Esri/esri-loader/

Ejemplo usando "esri-loader" en una aplicación React.

Esta app permite consultar una ciudad del mundo, despliega información del clima, un top 3 de las mejores atracciones y la localiza en el mapa de Esri. Se puede escribir la ciudad en el cuadro de texto o buscar en el mapa y dar clic en algún punto sobre él.

![Viajero-Web](../master/public/screenshot.PNG)

## Pre requisitos
1. NodeJS
 
## Instalación
1. Clonar el repositorio
2. Agregar en /src/util/OpenWeather.js el apiKey de [OpenWeather](https://openweathermap.org/api).
3. Agregar en /src/util/Foursquare.js el clientId y el clientSecret de [FoursSquare](https://developer.foursquare.com/).
4. Ejecutar "npm install"

## Ejecutar aplicación
1. Ejecutar "npm start"


Este proyecto emplea el api de [OpenWeather](https://openweathermap.org/api).
Este proyecto emplea el api de [FoursSquare](https://developer.foursquare.com/).
Este proyecto fue iniciado con [Create React App](https://github.com/facebook/create-react-app).