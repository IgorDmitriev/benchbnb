import Greeting from './greeting';
import { connect } from 'react-redux';
import { requestLogin, requestLogout } from '../actions/auth_actions';


const mapStateToProps = ({ session: { currentUser } }) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(requestLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
