const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9791e74cd9mshcae95880b7332aap1bf795jsn353ff987e900",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};


const widget = document.getElementsByClassName('widget')[0]
const lines = document.getElementById('line')
const logo=document.getElementById('logo')
const backicon=document.getElementById('backiconid')
const status = document.getElementById('status')   
const body= document.getElementsByTagName('body')[0]


const getWeather = (city) =>{
  cityName.innerHTML=city
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
)
  .then((response) => response.json())  
  .then((response) => {
    cloud_pct.innerHTML = response.cloud_pct; 
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    max_temp.innerHTML = response.max_temp;
    min_temp.innerHTML = response.min_temp;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset; 
    temp.innerHTML = response.temp;
    wind_degrees.innerHTML = response.wind_degrees;
    wind_speed.innerHTML = response.wind_speed;


    if(response.temp>15 & response.temp<30){
      widget.style.background="linear-gradient(to bottom right,orange 40%,#ff9900)"
      lines.style.color="#f4d430";
      logo.name="sunny"
      logo.style.color="#f4d430"
      body.style.backgroundColor="#cc5500"
      backicon.name="sunny"
      backicon.style.color="#ffff002f"
      status.innerHTML="SUNNY"
    }
    else if(response.temp>30){
      widget.style.background="linear-gradient(to bottom right, #f08080 60%, #dc143c)"
      lines.style.color="#f08080"
      logo.name="sunny"
      body.style.backgroundColor="#8b0000"
      logo.style.color="#f08080"
      backicon.name="sunny"
      backicon.style.color="#ff8a8a6f"
      status.innerHTML="WARM"
    }
    else{
      lines.style.color="#06f"
      widget.style.background= "linear-gradient(to bottom right, #3cc0fe 20%, #06f)"
      logo.name="snow"
      body.style.backgroundColor="#0f0648"
      logo.style.color="#06f"
      backicon.name="snow"
      backicon.style.color="#3cc1fe2a"
      status.innerHTML="cold"
    }
  })
  //  .catch((err) => console.log(error));
}
const search = document.getElementById('searc')
const submit = document.getElementById('submit')

submit.addEventListener("click",(event)=>{
  event.preventDefault();
  getWeather(search.value);
});
search.addEventListener("keypress", (event)=> {
  if (event.key === "Enter") {
    event.preventDefault();
    getWeather(search.value)
  }
});



getWeather("Ghaziabad");
