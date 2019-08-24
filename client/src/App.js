import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import store from './store';
import Router from './router'
// import Nav from './components/Nav';
// import WeatherContainer from './containers/WeatherContainer';
// import DisplayContainer from './containers/DisplayContainer';
// import PreviousWeatherContainer from './containers/PreviousWeatherContainer';

function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <Provider store={store}>
        {/* <GlobalStyle /> */}
        <Router />
      </Provider>
    </BrowserRouter>
 
  );
}

export default App;
