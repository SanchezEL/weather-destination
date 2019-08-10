import React from 'react'

export default function Display(props) {
  var hourWeather = props.weather[0]
  console.log(props)
  // console.log(hourWeather, 'yes')
  // if(hourWeather.length !== 0)  console.log(hourWeather, 'no' , hourWeather)
  console.log('the props in display are', props)
  if(hourWeather && props.searched){
    return (
      <div className="display-container">
        <div className="display">
          <p>It will be {Math.round((((props.weather[0].temp) - 273.15) * (9/5) + 32 ))}°F at your estimated time of arrival!</p>
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
