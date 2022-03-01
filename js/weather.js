const API_KEY = "688044dee3d8abebf47ea9bed0cfae01";  

function onGeoOk(position) {  
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;  
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;  
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector(".city");
            const icon = document.querySelector(".icon");

            city.innerText = data.name;
            
            const weatherIcon = data.weather[0].icon;
            icon.src =  `http://openweathermap.org/img/wn/${weatherIcon}.png`;
        })  
} 

function onGeoError() {  
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  













