import React from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import store from './store';
import Nav from './components/Nav';
import WeatherContainer from './containers/WeatherContainer';
import DisplayContainer from './containers/DisplayContainer';
import PreviousWeatherContainer from './containers/PreviousWeatherContainer';

function App() {
  return (
    // <div className="App">
    <Provider store={store}>
      <Nav/>
      <div className="mainComponents">
        <div className="searchDisplay">
          <WeatherContainer/>
          <DisplayContainer/>
        </div>
        <PreviousWeatherContainer/>
      </div>
    </Provider>
 
  );
}

export default App;
