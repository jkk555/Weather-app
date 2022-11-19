let cityName = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let button= document.querySelector('.submit');
let icon = document.querySelector('.icon');

const apiKey = "402dcb4b698cd700eadebb078b92e960";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
const lang = "pl"
const units = "metric";

window.onload = () => {
    getLocation();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeatherByLocation);
    } 
}

function showWeatherByLocation(position) {

    fetch(apiURL+"lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid="+apiKey+'&units='+units+'&lang='+lang)
    .then(e => e.json())
    .then(data => {
    var tempValue = data['main']['temp'];
    var iconID = data['weather'][0]['icon'];
    
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];

    main.innerHTML = nameValue;
    desc.innerHTML = descValue;
    temp.innerHTML = "Temperatura: "+Math.round(tempValue)+"&deg";
    icon.innerHTML = "<img src=http://openweathermap.org/img/wn/"+iconID+"@2x.png>";
    
    cityName.value ="";

    })
    

}


button.addEventListener('click', function(name){
fetch(apiURL+'q='+cityName.value+'&appid='+apiKey+'&units='+units+'&lang='+lang)
.then(e => e.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var iconID = data['weather'][0]['icon'];
  
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = "Temperatura: "+Math.round(tempValue)+"&deg";
  icon.innerHTML = "<img src=http://openweathermap.org/img/wn/"+iconID+"@2x.png>";
  
  cityName.value ="";

})


})
