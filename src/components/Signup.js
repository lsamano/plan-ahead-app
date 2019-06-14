import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupFetch } from '../redux/actions';

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    name: "",
    age: ""
  }

  submitHandler = event => {
    event.preventDefault()
    this.props.signupFetch(this.state)
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
        <h1>Signup Page</h1>
        <input name="username" value={this.state.username} onChange={this.changeHandler} type="text" placeholder="Username..."/>
        <input name="password" value={this.state.password} onChange={this.changeHandler} type="password" placeholder="Password..." />
        <input name="email" value={this.state.email} onChange={this.changeHandler} type="email" placeholder="Email..."/>
        <input name="name" value={this.state.name} onChange={this.changeHandler} type="text" placeholder="Name..."/>
        <input name="age" value={this.state.age} onChange={this.changeHandler} type="number" placeholder="Age..."/>
        <input type="submit" value="Signup" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signupFetch: () => dispatch(signupFetch())
})

export default connect(null, mapDispatchToProps)(Signup);
