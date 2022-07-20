import React, { Component } from "react";
import { getReservations } from "../ApiCalls";
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
    getReservations().then((data) => {
      this.setState({ reservations: data });
    });
  }

  addReservation = (newReservation) => {
    this.setState({
      reservations: [...this.state.reservations, newReservation],
    });
  };

  deleteReservation = (id) => {
    const filteredReservations = this.state.reservations.filter(
      (reservation) => reservation.id !== id
    );

    this.setState({ reservations: filteredReservations });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        {!this.state.reservations.length && (
          <h2>No reservations yet -- add some!</h2>
        )}
        <div>
          <Form addReservation={this.addReservation} />
        </div>
        <ReservationsContainer
          reservations={this.state.reservations}
          deleteReservation={this.deleteReservation}
        />
      </div>
    );
  }
}

export default App;
