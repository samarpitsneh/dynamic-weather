import React,{useState} from "react";
const api = {
  key : "e0eaf6a940302565c3c1ce8fe6d6ce96",
  url: "http://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query,setQuery]=useState('');
  const [weather,setWeather]= useState('');

  const search = evt =>{
    if (evt.key === "Enter") {
       fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
       .then(res => res.json())
       .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }


  return (
    <div className= {
      (typeof weather.main != "undefined") ? ((weather.main.temp > 25) ? 'App Warm' : "App")
      : "App"
    }>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="search"
            onChange={
              e => setQuery(e.target.value)
            }
            value={query}
            onKeyPress={search}
          />
        </div>

        {(!weather.main )?<p>no data found</p> : (
          <div>
          <div className="location-box">
          <div className="location">{weather.name},{weather.sys.country}</div>
          <div className="date">17/12/21</div>
        </div>

        <div className="weather-box">
          <div className="temp">{weather.main.temp}°c</div>
          <div className="weather"> {weather.weather[0].main} </div>
        </div>
          </div>)}
        
      </main>
    </div>
  );
}

export default App;
