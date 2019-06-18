import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { getProfileFetch } from './redux/actions';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Navbar from './components/Navbar'

class App extends Component {
  componentDidMount = () => {
    // fetches profile on page load if token exists
    localStorage.token && this.props.getProfileFetch(localStorage.token)
  }

  render() {
    return (
      <>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Home} />
      </Switch>
      < />
    );
  }
}

const mapStateToProps = state => ({
  user: state.reducer.user
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: token => dispatch(getProfileFetch(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
