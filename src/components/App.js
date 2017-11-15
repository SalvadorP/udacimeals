import React, { Component } from 'react';
import { addRecipe } from '../actions';

class App extends Component {

  state = {
    calendar: null
  }

  componentDidMount() {
    const {store} = this.props;
    // Anytime the store is updated we update our state (calendar).
    // There is a library react-redux which makes this faster and simpler...
    store.subscribe(() => {
        this.setState(() => ({
          calendar: store.getState()
        }))
      })
  }

  /**
   * When clicking on submit we call the action addRecipe adding the thing typed.
   */ 
  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label: this.input.value
      },
    }));
    this.input.value = '';
  }  

  render() {
    // Using the attribute ref allows us to modify directly the DOM without re-render.
    // For more info check: https://reactjs.org/docs/refs-and-the-dom.html
    return (
      <div className="App">
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>

        <pre>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    );
  }
}

export default App;
