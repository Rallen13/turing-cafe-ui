import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitReservation = (event) => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addReservation(newReservation);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: "", date: "", time: "", number: "" });
  };

  render() {
    return (
      <form className="reservation-form" data-cy="reservation-form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
          data-cy="input-name"
        />

        <input
          type="text"
          placeholder="Date"
          name="date"
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
          data-cy="input-date"
        />

        <input
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
          data-cy="input-time"
        />

        <input
          type="text"
          placeholder="Number"
          name="number"
          value={this.state.numner}
          onChange={(event) => this.handleChange(event)}
          data-cy="input-number"
        />
        <button
          onClick={(event) => {
            this.submitReservation(event);
          }}
          data-cy='form-button'
        >
          Make Reservation
        </button>
      </form>
    );
  }
}

export default Form;
