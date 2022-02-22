const API_KEY = "688044dee3d8abebf47ea9bed0cfae01";  //5.

function onGeoOk(position) {  //4.
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;  //숫자 준다
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;  //6.url불러오는법->url누르면 현재 장소,날씨 알 수 있다, 백틱으로!
    //fetch(url);  //7.url 직접 들어갈 필요없이, js가 자동으로 url 부른다(네트워크-fetch에서 확인할 수 있음)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector(".weather span:first-child");
            const weather = document.querySelector(".weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        })  //8.url을 fetch한 후, 서버로부터 받은 response의 json을 얻은 후, 데이터에서 현재 장소이름과 날씨를 얻어서 html변경
} //position매개변수에 js가 준 GeolocationPosition객체가 대입됨

function onGeoError() {  //4.
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  //3.브라우저에서 user의 위치를 준다
//getCurrentPosition(위치 주는데 잘됐을때 실행될 함수-success함수,에러났을때 실행될 함수-error함수)
//*js가 success함수에게 '인자로' GeolocationPosition객체(user의 위치좌표가 포함돼있음-위도,경도..)를 준다


//(4번이후)위치좌표 얻음->weather API가 우리가 있는 현재 장소,날씨를 줄 것이다(API:서버와 이야기할 수 있는 방법)
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}  (얻은 위치좌표를 {lat},{lon}에 대입,{API key}는 내 프로필에 있음)

//fetch는 promise이기 때문에 당장 일어나지 않고 시간이 좀 걸림

//openweather홈페이지에 weather API있다(url있음)













