import React from 'react';

class Textbox extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Answer:
            <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Textbox;
