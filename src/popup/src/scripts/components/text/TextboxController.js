import React from 'react';
import PropTypes from 'prop-types';
import Textbox from './Textbox';

class TextboxController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: 'A towel',
      answer: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.state.answer = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <Textbox onSubmit={this.handleSubmit} onChange={this.handleChange}/>
    );
  }
}

TextboxController.propTypes = {
  onSubmit: PropTypes.func,
};

export default TextboxController;
