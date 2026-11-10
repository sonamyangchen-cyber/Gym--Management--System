
import { useEffect, useState } from "react";
import {
  getTrainers,
  createTrainer,
  updateTrainer,
  deleteTrainer,
} from "../../services/trainerService";
import "./Trainers.css";

function Trainers() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingTrainer, setEditingTrainer] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialization: "",
    phone: "",
    experience: "",
    status: "Active",
  });

  const fetchTrainers = async () => {
    try {
      setError("");
      const result = await getTrainers();
      setTrainers(result.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      specialization: "",
      phone: "",
      experience: "",
      status: "Active",
    });
    setEditingTrainer(null);
    setShowForm(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const trainerData = {
        ...formData,
        experience: Number(formData.experience),
      };

      if (editingTrainer) {
        await updateTrainer(editingTrainer._id, trainerData);
      } else {
        await createTrainer(trainerData);
      }

      resetForm();
      await fetchTrainers();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (trainer) => {
    setEditingTrainer(trainer);
    setFormData({
      name: trainer.name,
      email: trainer.email,
      specialization: trainer.specialization,
      phone: trainer.phone,
      experience: trainer.experience,
      status: trainer.status,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this trainer?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTrainer(id);
      await fetchTrainers();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="trainers-container">
      <div className="trainers-card">
        <span className="trainers-badge">GYMPRO • TRAINERS</span>

        <h1>Manage Trainers</h1>
        <p className="trainers-description">
          Add, view, update and manage your gym trainers.
        </p>

        <div className="trainer-count-box">
          <h2>Total Trainers</h2>
          <div className="trainer-count">
            {loading ? "..." : trainers.length}
          </div>
        </div>

        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "Add New Trainer"}
        </button>

        {showForm && (
          <form className="trainer-form" onSubmit={handleSubmit}>
            <h2>{editingTrainer ? "Edit Trainer" : "Add Trainer"}</h2>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Trainer name"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
            />

            <input
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder="Specialization"
              required
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              required
            />

            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience in years"
              min="0"
              required
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button type="submit">
              {editingTrainer ? "Update Trainer" : "Save Trainer"}
            </button>

            <button type="button" onClick={resetForm}>
              Cancel
            </button>
          </form>
        )}

        {loading && <p>Loading trainers...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && trainers.length === 0 && (
          <p>No trainers found. Add a new trainer.</p>
        )}

        {!loading && trainers.length > 0 && (
          <div className="trainer-list">
            <h2>Trainer Information</h2>

            {trainers.map((trainer) => (
              <div className="trainer-item" key={trainer._id}>
                <h3>{trainer.name}</h3>
                <p>Email: {trainer.email}</p>
                <p>Specialization: {trainer.specialization}</p>
                <p>Phone: {trainer.phone}</p>
                <p>Experience: {trainer.experience} years</p>
                <p>Status: {trainer.status}</p>

                <button onClick={() => handleEdit(trainer)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(trainer._id)}>
                  Delete
                </button>

                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Trainers;
