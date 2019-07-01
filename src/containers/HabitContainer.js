import React, { Component } from 'react';
import HabitItem from '../components/HabitItem';

class HabitContainer extends Component {

  formatHabits = habits => (
    habits.map( habit => <HabitItem key={habit.id} {...habit}/> )
  )

  render() {
    return (
      <>
        <h2>Your Habits</h2>
        {
          this.props.habits &&
          this.formatHabits(this.props.habits)
        }
      < />
    );
  }

}

export default HabitContainer;
