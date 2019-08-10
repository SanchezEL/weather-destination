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
      <WeatherContainer/>
      <DisplayContainer/>
      <PreviousWeatherContainer/>
    </Provider>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
