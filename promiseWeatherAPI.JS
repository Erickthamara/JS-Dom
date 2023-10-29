//Create the promise function that will fethch the weather
//Requires the following parameter

const lattitude="-1.2833";
const longitude="36.8167";
const apiKey="b4db6ac66908363f463b7480f9abfdc9";
const city="Nairobi";

async function getWeather(){

        const apiData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        //const apiData=await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lattitude}&lon=${longitude}&appid=${apiKey}`)
        const response=await apiData.json()
        console.log(response.weather);
   
}

getWeather();
