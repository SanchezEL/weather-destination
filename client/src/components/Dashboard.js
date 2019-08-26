import React from 'react'
import { Provider } from 'react-redux'
// import store from './store';
import Nav from './Nav';
import WeatherContainer from '../containers/WeatherContainer';
import DisplayContainer from '../containers/DisplayContainer';
import PreviousWeatherContainer from '../containers/PreviousWeatherContainer';

export default function Dashboard() {
  return (
    <div>
      {/* <Provider store={store}> */}
        <Nav/>
        <div className="mainComponents">
          <div className="searchDisplay">
            <WeatherContainer/>
            <DisplayContainer/>
          </div>
          <PreviousWeatherContainer/>
        </div>
      {/* </Provider> */}
    </div>
  )
}
