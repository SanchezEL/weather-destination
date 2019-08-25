import { connect } from 'react-redux';
import Display from "../components/Display";

const mapStateToProps = (state) => {
  return {
    weather: state.weatherResults,
    searched: state.hasSearched
  }
}

export default connect(mapStateToProps, null)(Display);
