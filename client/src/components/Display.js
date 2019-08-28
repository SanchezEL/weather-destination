import React from 'react'

export default function Display(props) {
  var hourWeather = props.weather[0]
  console.log(props)
  console.log('the props in display are', props.weather.length, props.weather[0])
  //if the user has searched for a city and data has been returned back to them it will display the data for that city
  if(hourWeather && props.searched){
    console.log(props.weather, props.weather[0].weather.main.temp, props.weather[0].weather.weather[0].description, 'what in tarnation')
    return (
      <div className="display-container">
        <div className="display">
          <p>It will be {Math.round((((props.weather[0].weather.main.temp) - 273.15) * (9/5) + 32 ))}°F with {props.weather[0].weather.weather[0].description} at the time you're estimated to arrive at your destination!</p>
        </div>
      </div>
    )
  }//if the user has not yet searched it will display text prompting the user to search for a city
  else{
    return(
      <div className="display-container">
        <div className="display">
          <p>Enter in the name of the city in which you're headed into the search bar and we'll tell you what the weather will be like at the time you get there!</p>
        </div>
      </div>
    )
  }
  
}
