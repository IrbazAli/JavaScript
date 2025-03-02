const apiKey = "2ce9882160b15ae00d34694ed5d1a809";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=2ce9882160b15ae00d34694ed5d1a809&units=metric&q=";
const city = document.querySelector(".input input");
const searchBtn = document.querySelector(".input button");
const WeathearIcon = document.querySelector(".wheather-icon img")


async function checkWeathear(city) {
    const response = await fetch(apiUrl + city);
    var data = await response.json();
    console.log(data); 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".degree").innerHTML = Math.round(data.main.temp) + "*C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + "km/h";

    console.log("Weather Main: ", data.weather[0].main); 

    if (data.weather[0].main == "Clouds") {
        WeathearIcon.src = "cloud-stroke-rounded.svg";
    } else if (data.weather[0].main == "Rain") {
        WeathearIcon.src = "cloud-angled-rain-stroke-rounded.svg";
    } else if (data.weather[0].main == "Clear") {
        WeathearIcon.src = "sun-cloud-angled-rain-02-stroke-rounded.svg";
    } else {
        console.log("Weather condition not handled: ", data.weather[0].main); 
    }

    document.querySelector(".weather").style.display="block"
}
searchBtn.addEventListener("click", () => {
    checkWeathear(city.value);
})
