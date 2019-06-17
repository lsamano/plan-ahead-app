import React, { Component } from 'react';
import GoalItem from '../components/GoalItem';

class GoalContainer extends Component {

  formatGoals = goals => (
    goals.map( goal => <GoalItem key={goal.id} {...goal}/> )
  )

  render() {
    return (
      <>
        <h2>Your Goals</h2>
        {
          this.props.goals &&
          this.formatGoals(this.props.goals)
        }
      < />
    );
  }

}

export default GoalContainer;
