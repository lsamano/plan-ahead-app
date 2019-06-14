import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { getProfileFetch } from './redux/actions';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'

class App extends Component {
  componentDidMount = () => {
    // fetches profile on page load
    this.props.getProfileFetch()
  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  user: state.reducer.user
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
