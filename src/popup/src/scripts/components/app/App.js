import React from 'react';
import TextboxController from '../text/TextboxController';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      correct: false,
      arr: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(payload) {
    const arr = this.state.arr;
    if (payload.answer === payload.correctAnswer) {
      this.setState({ correct: true });
    }
    arr.push('attempt');
    this.setState({ arr });
  }

  render() {
    if (this.state.correct) {
      return (
        <div>
          Correct
        </div>
      )
    }
    if (this.state.arr.length > 0) {
      return (
        <div>
          Wrong! Try again! What gets wetter as it dries?
          <TextboxController onSubmit={this.handleSubmit} />
        </div>
      )
    }
    return (
      <div>
        What gets wetter as it dries?
        <TextboxController onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
