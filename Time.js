import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
    };
    this.interval = null; // Initialize the interval variable.
  }

  componentDidMount() {
    this.tick();

    // Set up the interval to update the time every second.
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted.
    clearInterval(this.interval);
  }

  tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const updated = `${hours}:${minutes}:${seconds}`;
    this.setState({ time: updated });
  };

  render() {
    return (
      <div>
        <h1>Digital Clock</h1>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default Time;
