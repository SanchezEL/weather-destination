import { connect } from 'react-redux'
import Login from '../components/auth/Login'
import { login } from '../actions/actions'

const mapStateToProps = (store) => {
  return {
    user: store.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)