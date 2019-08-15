import React from 'react'

export default function Display(props) {
  var hourWeather = props.weather[0]
  console.log(props)
  console.log('the props in display are', props.weather.length, props.weather[0])
  if(hourWeather && props.searched){
    console.log(props.weather[0].weather[0], 'what in tarnation')
    return (
      <div className="display-container">
        <div className="display">
          <p>It will be {Math.round((((props.weather[0].main.temp) - 273.15) * (9/5) + 32 ))}°F with {props.weather[0].weather[0].description} at your estimated time of arrival!</p>
        </div>
      </div>
    )
  }
  else{
    return(
      <div className="display-container">
        <div className="display">
          <p>Enter in the name of the city you're headed to and we'll tell you what the weather will be like at the time you get there!</p>
        </div>
      </div>
    )
  }
  
}
