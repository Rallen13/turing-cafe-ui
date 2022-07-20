import React, { Component } from "react";
import { getReservations } from "../ApiCalls";
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

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="reservation-form"></div>
        <ReservationsContainer reservations={this.state.reservations} />
      </div>
    );
  }
}

export default App;
