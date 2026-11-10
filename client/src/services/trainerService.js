
const API_URL = "http://localhost:5000/api/trainers";

// Get all trainers
export const getTrainers = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch trainers");
  }

  return response.json();
};

// Add a new trainer
export const createTrainer = async (trainerData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trainerData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create trainer");
  }

  return data;
};

// Update a trainer
export const updateTrainer = async (id, trainerData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trainerData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update trainer");
  }

  return data;
};

// Delete a trainer
export const deleteTrainer = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete trainer");
  }

  return data;
};
