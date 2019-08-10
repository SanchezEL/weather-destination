import { connect } from 'react-redux';
import {loadTime, hasSearched} from "../actions/actions";
import Weather from "../components/Weather";

const mapDispatchToProps = (dispatch) => {
  return {
    loadTime: (searchTerm) => dispatch(loadTime(searchTerm)),
    hasSearched: (searched) => dispatch(hasSearched(searched)),
  }
}

export default connect(null, mapDispatchToProps)(Weather);
