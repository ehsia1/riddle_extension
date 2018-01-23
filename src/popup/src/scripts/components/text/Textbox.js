import React from 'react';
import PropTypes from 'prop-types';

const Textbox = (props) => (
    <div>
      <form onSubmit={(event) => { props.onSubmit(event); }}>
        <label>
          Answer:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );

Textbox.propTypes = {
  onSubmit: PropTypes.func,
};

export default Textbox;
