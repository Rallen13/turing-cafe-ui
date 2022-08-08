import React from "react";
import "./ReservationCard.css";

const ReservationCard = ({ reservation, removeReservation }) => {
  return (
    <div className="reservation-card" data-cy="reservation-card">
      <h2 data-cy="reservation-name">{reservation.name}</h2>
      <h2 data-cy="reservation-date"> {reservation.date} </h2>
      <h2 data-cy="reservation-time"> {reservation.time} </h2>
      <h2 data-cy="reservation-number"> {reservation.number} </h2>
      <button onClick={() => removeReservation(reservation.id)} data-cy="reservation-cancel-button">Cancel</button>
    </div>
  );
};

export default ReservationCard;
