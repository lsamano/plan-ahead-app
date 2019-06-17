import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <div>
        <Link to="/">Go Home </Link>
        <Link to="/login">Login </Link>
        <Link to="/signup">Sign Up </Link>
      </div>
    );
  }

}

export default Navbar;
