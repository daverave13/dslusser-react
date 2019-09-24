import React from "react";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <input
        type="text"
        id="input"
        placeholder="Type here to filter (PHI, DEV etc.)"
        autoComplete="off"
        onChange={this.props.parentCallback}
      />
    );
  }
}

export default Filter;
