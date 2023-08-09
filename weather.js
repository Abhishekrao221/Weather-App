const api ='2246a243f033737c4ed23eb39ca2e0ae';

const weatherData = document.querySelector('.weather-data');
const city =document.querySelector('.city');
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const cityvalue = city.value;
    getWeather(cityvalue)
    

});



 async function getWeather(cityvalue){
    try {
      weatherData.style.display='none';
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${api}`);
        const data = await res.json();
        weatherData.style.display='block';
      const temperature = Math.round((data.main.temp)/10);
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const details =[
        `Feel like : ${Math.round((data.main.feels_like)/10)}`,
        `Humidity :${data.main.humidity}%`,
        `Wind Speed : ${data.wind.speed}m/s`,
      ]
      weatherData.querySelector('.image').innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="" width="20px">`;
      weatherData.querySelector('.temperature').innerText=`${temperature}  °C`
      weatherData.querySelector('.description').innerText=`${description}`;
      weatherData.querySelector('.conditions').innerHTML=details.map((details)=>`<div>${details}</div>`).join('')
    } catch (error) {
      weatherData.querySelector('.image').innerHTML='';
      weatherData.querySelector('.temperature').innerText='';
    
      weatherData.querySelector('.conditions').innerHTML='';
        weatherData.querySelector('.description').innerText='Enter the Right LOCATION';
    }
     
}