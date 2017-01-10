import React from 'react';
import { hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    this.props.processForm(user).then(
      () => this.redirect()
    );
  }

  redirect () {
    hashHistory.push('/');
  }

  handleInput (type, e) {
    e.preventDefault();
    this.setState({
      [type]: e.target.value
    });
  }

  render () {
    return (
      <div>
        <div>
          <ul>
            {
              this.props.errors.map(
                (error, idx) => <li key={idx}>{error}</li>
              )
            }
          </ul>
        </div>
        <form onSubmit={ this.handleSubmit }>
          <h3>{ this.props.formType }</h3>
          <label>Username
            <input
              type="text"
              onChange={ this.handleInput.bind(this, 'username') } />
          </label>
          <label>Password
            <input
              type="password"
              onChange={ this.handleInput.bind(this, 'password') } />
          </label>
          <button>{ this.props.formType }</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
