const weatherApi = {
    key:"92dac1e5f2a0636cf677ab2d1bc855df",
    baseUrl:"http://api.openweathermap.org/data/2.5/weather"
}
// create add event listner to add events
const searchbox=document.getElementById('inputbox');
searchbox.addEventListener('keypress',event =>{
    if(event.keyCode == 13){
    console.log(searchbox.value);
    getReport(searchbox.value);
    document.querySelector('.Weather_body').style.display="block";
    }
});
// Create function to fetch API
function getReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showReport);
}
// Create function to Show Weather Information
function showReport(weather){
    console.log(weather);
    let city=document.getElementById('city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temperature=document.getElementById('temp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let WeatherType=document.getElementById('weather');
    WeatherType.innerText=`${weather.weather[0].main}`;

    let date=document.getElementById('date');
    let tdate=new Date();
    date.innerText=managedate(tdate);

    if(WeatherType.textContent == 'Clear'){
        document.body.style.backgroundImage="url('images/clear.jpg')";
    }
    else if(WeatherType.textContent=='Clouds'){
        document.body.style.backgroundImage="url('images/cloud.jpg')";
    }
    else if(WeatherType.textContent=='Snow'){
        document.body.style.backgroundImage="url('images/snow.jpg')";
    }
    else if(WeatherType.textContent=='Haze'){
        document.body.style.backgroundImage="url('images/fog.jpg')";
    }
    else if(WeatherType.textContent=='Rain'){
        document.body.style.backgroundImage="url('images/rain.jpg')";
    }
    else if(WeatherType.textContent=='thunderstorm'){
        document.body.style.backgroundImage="url('images/storm.jpg')";
    }
    else if(WeatherType.textContent=='Sunny'){
        document.body.style.backgroundImage="url('images/sunny.jpg')";
    }
    else if(WeatherType.textContent=='Smoke'){
        document.body.style.backgroundImage="url('images/smoke.jpg')";
    }
}

// Create function to manage dates 
function managedate(arg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thruday","Friday","Saturday"];

    let months=["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year=arg.getFullYear();
    let month=months[arg.getMonth()];
    let date=arg.getDate();
    let day=days[arg.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}



