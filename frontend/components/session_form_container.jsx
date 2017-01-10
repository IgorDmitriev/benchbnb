import { connect } from 'react-redux';
import SessionForm from './session_form';
import { requestLogin, requestSignup } from '../actions/auth_actions';

const mapStateToProps = ({ session: { currentUser, errors }}, ownProps) => {
  let loggedIn = Boolean(currentUser);
  let formType = ownProps.location.pathname === '/login' ? 'login' : 'signup';

  return {
    loggedIn,
    errors,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.location.pathname === '/login' ? requestLogin : requestSignup;

  return {
    processForm: (user) => dispatch(action(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
