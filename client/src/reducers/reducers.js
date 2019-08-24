import { combineReducers } from 'redux'


const  weatherResults = (state = [], action) => {
  console.log(action, state, 'theWeather')
  switch (action.type) {
    case 'WEATHER_RESULTS_LOADED':
      return [action.value, ...state]
    default:
      return state
  }
}
const  hasSearched = (state = false, action) => {
  console.log(action, state)
  switch (action.type) {
    case 'USER_HAS_SEARCHED':
      return action.value
    default:
      return state
  }
}
const user = (state = {}, action) => {
  // state = ./state.js => user
  console.log('action',action.type)
  switch (action.type) {
    case 'LOGIN':
    case 'SET_USER':
      return action.value
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}
export default combineReducers({
  weatherResults,
  hasSearched,
  user
})