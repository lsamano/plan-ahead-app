import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginFetch } from '../redux/actions';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  submitHandler = event => {
    event.preventDefault()
    this.props.loginFetch(this.state)
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h1>Login Page</h1>
        <input name="username" value={this.state.username} onChange={this.changeHandler} type="text" placeholder="Username..."/>
        <input name="password" value={this.state.password} onChange={this.changeHandler} type="password" placeholder="Password..." />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginFetch: loginObj => dispatch(loginFetch(loginObj))
})

export default connect(null, mapDispatchToProps)(Login);
