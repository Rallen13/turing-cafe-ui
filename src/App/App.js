import React, { Component } from "react";
import { getReservations } from "../ApiCalls";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [
        {
          id: 1,
          name: "Christie",
          date: "12/29",
          time: "7:00",
          number: 12,
        },
        {
          id: 2,
          name: "Leta",
          date: "4/5",
          time: "7:00",
          number: 2,
        },
        {
          id: 3,
          name: "Pam",
          date: "1/21",
          time: "6:00",
          number: 4,
        },
      ],
    };
  }

  // componentDidMount() {
  //   getReservations.then((data) => {
  //     this.setState({ reservations: data });
  //   });
  // }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="reservation-form"></div>
        <section className="reservations-container">
          {this.state.reservations.map((reservation) => {
            return (
              <div key={reservation.id} className="reservation-card">
                <h2>{reservation.name}</h2>
                <h2> {reservation.date} </h2>
                <h2> {reservation.time} </h2>
                <h2> {reservation.number} </h2>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
