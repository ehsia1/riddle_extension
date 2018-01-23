import React from 'react';
import TextboxController from '../text/TextboxController'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: 'A towel',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (event.target.value === this.state.correctAnswer) {
      alert("Yay!");
    }
  }

  render() {
    return (
      <div>
        What gets wetter as it dries?
        <TextboxController onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
