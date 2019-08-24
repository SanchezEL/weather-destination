import { connect } from 'react-redux'
import axios from 'axios'
import jwt from 'jsonwebtoken'


export const loadTime = (searchTerm) => {
  console.log(searchTerm, 'that')
  return function (dispatch) {
    fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Austin,TX&destinations=${searchTerm},TX&key=AIzaSyAzfNcHCpJBIFk-qEoxa-c_LrVQYe9WV34`)
      // .then(res => console.log(res.json()))
      .then(res => res.json())
      // .then(results=> console.log(results.rows[0]), 'holy mackerel')
      .then(results => dispatch(loadWeather(searchTerm, results.rows[0].elements[0])))
  }
}
export const loadWeather = (searchTerm, time) => {
  console.log(searchTerm,time, 'this')
  var arrival = time.duration.text.split(' ')
  var arrivalValue =0
  // check how many hours it takes to get to destination and set arrivalValue to the next 3 hour interval
  if(arrival.length === 4){
    arrivalValue += (Math.round(parseInt(arrival[0])/3))-1
  }else if(arrival.length === 6){
    arrivalValue += (Math.round(((parseInt(arrival[0])*24) + parseInt(arrival[2]))/3))-1
  }
  console.log(searchTerm, arrivalValue)
  return function (dispatch) {
    // fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm},us&APPID=12be784d551a3265d5555fbdc0a47b41`)
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm},us&APPID=5671234935774cd73b5c543867a39f6d`)
      // .then(res => console.log(res.json()))
      .then(res => res.json())
      // finds the weather results at the correct 3 hour interval
      .then(results => dispatch(searchLoaded(results.list[arrivalValue])))
      .catch(function(error) {                        
        console.log('Request failed', error);
      });
  }
}
export const searchLoaded = (weather) => {
  console.log(weather)
  return {
    type: "WEATHER_RESULTS_LOADED",
    value: weather
  }
}
export const hasSearched = (searched) => {
  console.log(searched, 'searchEd')
  return {
    type: "USER_HAS_SEARCHED",
    value: searched
  }
}
export function login({ userName, password, cities }) {
  return dispatch => {
    return axios({
      url: '/api/login',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ userName, password })
    })
    .then(res => {
      document.cookie = `id_token=${res.data};max-age=300;`
      const payload = jwt.verify(res.data, 'secret')
      console.log("payload: ", payload._doc)
      dispatch({
        type: 'LOGIN',
        value: payload._doc
      })
    })
    .catch(err => Promise.reject(err))
  }
}

export function logout() {
  return {
    type: 'LOGOUT'
  }
}

export function signUp({ userName, password, cities }) {
  return dispatch => {
    return axios({
      url: '/api/signup',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ userName, password, cities })
    })
    .then((res) => dispatch(login({ userName, password, cities: [] })))
    .catch(err => Promise.reject(err))
  }
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    value: user
  }
}

export function updateUser(userName) {
  return dispatch => {
    return axios({
      url: '/api/user',
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ userName }),
      withCredentials: true
    })
    .catch(err => Promise.reject(err))
  }  
}

export function updatePassword(password) {
  return dispatch => {
    return axios({
      url: '/api/password',
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ password }),
      withCredentials: true
    })
    .catch(err => Promise.reject(err))
  }  
}