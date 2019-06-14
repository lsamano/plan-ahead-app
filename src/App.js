import React, { Component } from 'react';
import './App.css';
import { getProfileFetch } from './redux/actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch();
  }

  render() {
    return (
      <div className="App">
        
      </div>
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
