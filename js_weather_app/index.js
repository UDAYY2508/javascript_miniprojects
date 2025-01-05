const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = "d52d18be0fa8b78cf81d95834018cbe5";

weatherForm.addEventListener("submit",async event =>{

    event.preventDefault();

    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayInfo(weatherData);

        }
        catch(error){
            console.error(error);
            diplayError(error)
            
        }

    }
    else{
        diplayError("Enter a city")
    }

});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(apiUrl);
    console.log(response);

    if(!response){
        throw new Error("Could not fetch weather details");
    }
    return response.json();
}
function displayInfo(data){
    const {name: city,
            main:{temp,humidity},
            weather:[{discription,id}]} = data;
    card.textContent = "";
    card.style.display = "flex";  
    
    const citydisplay = document.createElement("h1");
    const tempdisplay = document.createElement("p");
    const humiditydisplay = document.createElement("p");
    const descdisplay = document.createElement("p");
    const emoji = document.createElement("p");

    citydisplay.textContent = city;
    tempdisplay.textContent = Math.round(temp-273.15).toFixed(1) + "°C";
    humiditydisplay.textContent =`humidity: ${humidity}%`;
    descdisplay.textContent = discription;
    emoji.textContent = getEmoji(id);
    
    citydisplay.classList.add("citydisplay");
    tempdisplay.classList.add("temp");
    humiditydisplay.classList.add("humid");
    descdisplay.classList.add("dsec")
    emoji.classList.add("emoji");

    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiditydisplay);
    card.appendChild(descdisplay)
    card.appendChild(emoji);

}
function getEmoji(id){
    switch(true){
        case (id >= 200 && id <= 299):
            return "⛈️";
        case (id >= 300 && id <= 399):
            return "🌦️";
        case (id >= 500 && id <= 599):
            return "🌧️";
        case (id >= 600 && id <= 699):
            return "❄️";
        case (id >= 700 && id <= 799):
            return "🌫️";
        case (id === 800 ):
            return "☀️";
        case (id <= 801):
            return "☁️";
        default:
            return "❓"
        
    }
}
function diplayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message
    errorDisplay.classList.add("error")

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay)
}