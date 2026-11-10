
const API_URL = "http://localhost:5000/api/members";

// Get all gym members
export const getMembers = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch members");
  }

  return response.json();
};

// Add a new gym member
export const createMember = async (memberData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memberData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create member");
  }

  return data;
};
// Update an existing gym member
export const updateMember = async (id, memberData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memberData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update member");
  }

  return data;
};

// Delete a gym member
export const deleteMember = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete member");
  }

  return data;
};