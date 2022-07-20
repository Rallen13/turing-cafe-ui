import React from "react";
import "./ReservationCard.css";

const ReservationCard = ({ reservation }) => {
  return (
    <div className="reservation-card">
      <h2>{reservation.name}</h2>
      <h2> {reservation.date} </h2>
      <h2> {reservation.time} </h2>
      <h2> {reservation.number} </h2>
    </div>
  );
};

export default ReservationCard;
