import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  submitHandler = event => {
    event.preventDefault()
    // TODO: run create user fetch
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

export default Login;
