import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor (props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout (e) {
    e.preventDefault();
    this.props.logout();
  }

  render () {
    let greeting;

    if (this.props.currentUser) {
      greeting = (
        <div>
          <h3>Welcome!</h3>
          <button onClick={ this.handleLogout }>Log out</button>
        </div>
      );
    } else {
      greeting = (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }

    return greeting;

  }
}

export default Greeting;
