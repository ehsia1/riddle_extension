import React from 'react';
import PropTypes from 'prop-types';

const Textbox = (props) => (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>
          Answer:
          <input type="text" onChange={(e) => { props.onChange(e); }}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );

Textbox.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default Textbox;
