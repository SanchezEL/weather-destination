import { connect } from 'react-redux';
import {loadTime, hasSearched, updateUser} from "../actions/actions";
import Weather from "../components/Weather";


const mapStateToProps = (state) => {
  console.log('mapstateweather', state)
  return {
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadTime: (searchTerm) => dispatch(loadTime(searchTerm)),
    hasSearched: (searched) => dispatch(hasSearched(searched)),
    updateUser: (cities) => dispatch(updateUser(cities))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
