import React, { Component } from "react";
import {
  getReservations,
  postReservation,
  deleteReservation,
} from "../ApiCalls";
import Form from "../Components/Form";
import ReservationsContainer from "../Components/ReservationsContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }

  componentDidMount() {
    try {
      getReservations().then((data) => {
        this.setState({ reservations: data });
      });
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }

  addReservation = async (newReservation) => {
    try {
      await postReservation(newReservation);

      await getReservations().then((data) => {
        this.setState({ reservations: data });
      });
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  removeReservation = async (id) => {
    try {
      await deleteReservation(id);

      await getReservations().then((data) => {
        this.setState({ reservations: data });
      });
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title" data-cy="app-heading">
          Turing Cafe Reservations
        </h1>
        {!this.state.reservations.length && (
          <h2>No reservations yet -- add some!</h2>
        )}
        <div>
          <Form addReservation={this.addReservation} />
        </div>
        <ReservationsContainer
          reservations={this.state.reservations}
          removeReservation={this.removeReservation}
        />
      </div>
    );
  }
}

export default App;
