import React from "react";
import ReservationCard from "./ReservationCard";
import "./ReservationsContainer.css";

const ReservationsContainer = ({ reservations, removeReservation }) => {
  const renderedCards = reservations.map((reservation) => {
    return (
      <ReservationCard
        key={reservation.id}
        reservation={reservation}
        removeReservation={removeReservation}
      />
    );
  });

  return (
    <section className="reservations-container">
      {renderedCards}
    </section>
  );
};

export default ReservationsContainer;
