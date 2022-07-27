import React from "react";
import "./ReservationCard.css";

const ReservationCard = ({ reservation, removeReservation }) => {
  return (
    <div className="reservation-card">
      <h2>{reservation.name}</h2>
      <h2> {reservation.date} </h2>
      <h2> {reservation.time} </h2>
      <h2> {reservation.number} </h2>
      <button onClick={() => removeReservation(reservation.id)}>Cancel</button>
    </div>
  );
};

export default ReservationCard;
