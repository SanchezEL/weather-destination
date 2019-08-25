import { connect } from 'react-redux';
import {loadTime} from "../actions/actions";
import PreviousWeather from "../components/PreviousWeather";

const mapDispatchToProps = (dispatch) => {
  return {
    loadTime: (searchTerm) => dispatch(loadTime(searchTerm))
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weatherResults,
    searched: state.hasSearched
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviousWeather);
