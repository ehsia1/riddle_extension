import React from 'react';
import PropTypes from 'prop-types';
import Textbox from './Textbox';

class TextboxController extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return (
      <Textbox onSubmit={this.handleSubmit} />
    );
  }
}

TextboxController.propTypes = {
  onSubmit: PropTypes.func,
};

export default TextboxController;
