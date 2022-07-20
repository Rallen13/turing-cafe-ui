export const getReservations = async () => {
  const URL = "http://localhost:3001/api/v1/reservations";

  const response = await fetch(URL);
  return await response.json();
};
