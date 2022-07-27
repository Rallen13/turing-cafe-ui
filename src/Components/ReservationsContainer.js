import React from "react";
import ReservationCard from "./ReservationCard";
import "./ReservationsContainer.css";

const ReservationsContainer = ({ reservations, removeReservation }) => {
  return (
    <section className="reservations-container">
      {reservations.map((reservation) => {
        return (
          <ReservationCard key={reservation.id} reservation={reservation} removeReservation={removeReservation} />
        );
      })}
    </section>
  );
};

export default ReservationsContainer;
