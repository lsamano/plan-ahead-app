import React, { Component } from 'react';
import HabitContainer from '../containers/HabitContainer';
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    return (
      <>
      <h1>Welcome, {this.props.currentUser.username}.</h1>
      <HabitContainer />
      < />
    );
  }

}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser
})

export default connect(mapStateToProps)(Home);
