import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../redux/actions';
import { connect } from 'react-redux';

class Navbar extends Component {

  handleClick = event => {

  }

  render() {
    return (
      <div>
        <Link to="/">Go Home </Link>
        <Link to="/login">Login </Link>
        <Link to="/signup">Sign Up </Link>
        <Link to="/login" onClick={this.handleClick}>Logout </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(Navbar);
