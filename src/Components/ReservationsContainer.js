import React from "react";
import "./ReservationsContainer.css";

const ReservationsContainer = ({ reservation }) => {
  return (
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
  );
};

export default ReservationsContainer;
