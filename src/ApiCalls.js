export const getReservations = async () => {
  const URL = "http://localhost:3001/api/v1/reservations";

  const response = await fetch(URL);
  return await response.json();
};

export const postReservation = async (newReservation) => {
  console.log(newReservation);
  const URL = "http://localhost:3001/api/v1/reservations"
  const postInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReservation),
  };
  await fetch(URL, postInfo);
};

export const deleteReservation = async (id) => {
  const URL = `http://localhost:3001/api/v1/reservations/${id}`;
  const deleteInfo = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  await fetch(URL, deleteInfo);
};
