import { connect } from 'react-redux';
import {loadTime} from "../actions/actions";
import PreviousWeather from "../components/PreviousWeather";
// import store from '../store'

const mapDispatchToProps = (dispatch) => {
  return {
    loadTime: (searchTerm) => dispatch(loadTime(searchTerm))
  }
}

const mapStateToProps = (state, store) => {
  console.log(state, "mapstateprev", store)
  return {
    weather: state.weatherResults,
    searched: state.hasSearched,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviousWeather);
