import { combineReducers } from 'redux'


const  weatherResults = (state = [], action) => {
  console.log(action, state)
  switch (action.type) {
    case 'WEATHER_RESULTS_LOADED':
      return [action.value, ...state]
    default:
      return state
  }
}
const  hasSearched = (state = false, action) => {
  console.log(action, state, 'hasSearched')
  switch (action.type) {
    case 'USER_HAS_SEARCHED':
      return action.value
    default:
      return state
  }
}
export default combineReducers({
  weatherResults,
  hasSearched
})