import React from "react";
import ReservationCard from "./ReservationCard";
import "./ReservationsContainer.css";

const ReservationsContainer = ({ reservations, deleteReservation }) => {
  return (
    <section className="reservations-container">
      {reservations.map((reservation) => {
        return (
          <ReservationCard key={reservation.id} reservation={reservation} deleteReservation={deleteReservation} />
        );
      })}
    </section>
  );
};

export default ReservationsContainer;
