
import { useEffect, useState } from "react";
import Button from "../../components/common/Button";
import {
  getMembers,
  updateMember,
  deleteMember,
} from "../../services/memberService";
import "./Dashboard.css";

function Dashboard() {
 const [members, setMembers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [editingMember, setEditingMember] = useState(null);
const [editName, setEditName] = useState("");
const [editEmail, setEditEmail] = useState("");
const [editPlan, setEditPlan] = useState("");
  const fetchMembers = async () => {
  try {
    setError("");
    const result = await getMembers();
    setMembers(result.data || []);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchMembers();
}, []);
const handleEdit = (member) => {
  setEditingMember(member);
  setEditName(member.name);
  setEditEmail(member.email);
  setEditPlan(member.membershipPlan);
};
const handleUpdate = async (event) => {
  event.preventDefault();

  try {
    await updateMember(editingMember._id, {
      name: editName,
      email: editEmail,
      membershipPlan: editPlan,
    });

    setEditingMember(null);
    await fetchMembers();
  } catch (err) {
    setError(err.message);
  }
};
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this member?"
  );

  if (!confirmDelete) return;

  try {
    await deleteMember(id);
    await fetchMembers();
  } catch (err) {
    setError(err.message);
  }
};
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <span className="dashboard-badge">GYMPRO • DASHBOARD</span>

        <h1>Gym Dashboard</h1>

        <p className="dashboard-description">
          Manage your gym members and track daily check-ins.
        </p>

        <div className="checkin-box">
          <h2>Total Gym Members</h2>
          <div className="count-number">
            {loading ? "..." : members.length}
          </div>
        </div>

        <div className="member-box">
          <h2>Member Information</h2>
          {editingMember && (
  <form onSubmit={handleUpdate}>
    <h3>Edit Member</h3>

    <input
      type="text"
      value={editName}
      onChange={(event) => setEditName(event.target.value)}
      placeholder="Member name"
      required
    />

    <input
      type="email"
      value={editEmail}
      onChange={(event) => setEditEmail(event.target.value)}
      placeholder="Email address"
      required
    />

    <select
      value={editPlan}
      onChange={(event) => setEditPlan(event.target.value)}
      required
    >
      <option value="Monthly">Monthly</option>
      <option value="Quarterly">Quarterly</option>
      <option value="Yearly">Yearly</option>
    </select>

    <button type="submit">Save Changes</button>

    <button
      type="button"
      onClick={() => setEditingMember(null)}
    >
      Cancel
    </button>
  </form>
)}

          {loading && <p>Loading members...</p>}

          {error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && !error && members.length === 0 && (
            <p>No members found. Please register a new member.</p>
          )}

          {!loading && !error && members.length > 0 && (
            <div>
              {members.map((member) => (
                <div key={member._id}>
                 <h3>{member.name}</h3>
<p>Email: {member.email}</p>
<p>Plan: {member.membershipPlan}</p>
<p>Status: {member.status}</p>

<button onClick={() => handleEdit(member)}>
  Edit
</button>

<button onClick={() => handleDelete(member._id)}>
  Delete
</button>

<hr />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
