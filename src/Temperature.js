import React from "react";
import PropTypes from "prop-types";

export default class Temperature extends React.Component {
  static propTypes = {
    temp: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    toggleForecast: PropTypes.func.isRequired
  };

  render() {
    return (
      <div
        onClick={e => {
          e.preventDefault();
          this.props.toggleForecast();
        }}
      >
        <h2>{this.props.temp}&deg;c</h2>
        <h3>{this.props.city}</h3>
      </div>
    );
  }
}
