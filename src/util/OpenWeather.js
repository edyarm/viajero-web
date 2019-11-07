import Helper from './helper';
const apiKey = ""; // ApiKey de OpenWeather
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const OpenWeather = {
    getForecast: function(city){
        const urlToFetch = `${weatherUrl}?q=${city}&APPID=${apiKey}`;
        return fetch(urlToFetch).then(response => response.json()).then(jsonResponse => {
            if(jsonResponse.cod === 200){
                return {
                    currentDay: Helper.weekDays[(new Date()).getDay()],
                    temperature: (jsonResponse.main) ? Helper.kelvinToFahrenheit(jsonResponse.main.temp) : "",
                    condition: jsonResponse.weather[0].description,
                    img: `https://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`,
                    coord: jsonResponse.coord
                }
            }else{
                return {
                    currentDay: "",
                    temperature: "",
                    condition: "",
                    img: "",
                    coord: ""
                }
            }
        });
    }
}

export default OpenWeather;