import React from "react";
import ReservationCard from "./ReservationCard";
import "./ReservationsContainer.css";

const ReservationsContainer = ({ reservations }) => {
  return (
    <section className="reservations-container">
      {reservations.map((reservation) => {
        return (
          <ReservationCard key={reservation.id} reservation={reservation} />
        );
      })}
    </section>
  );
};

export default ReservationsContainer;
