import { useState } from "react";
import Button from "../../components/common/Button";

function Dashboard() {
  const [count, setCount] = useState(0);
  const [memberName, setMemberName] = useState("");

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <span className="dashboard-badge">GYMPRO • DASHBOARD</span>

        <h1>Gym Dashboard</h1>

        <p className="dashboard-description">
          Manage your gym members and track daily check-ins.
        </p>

        <div className="checkin-box">
          <h2>Members Checked In</h2>

          <div className="count-number">{count}</div>

          <Button onClick={() => setCount(count + 1)}>
            Check In Member
          </Button>
        </div>

        <div className="member-box">
          <h2>Member Information</h2>

          <input
            type="text"
            placeholder="Enter member name"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
          />

          {memberName ? (
            <p className="welcome-message">
              Welcome, <strong>{memberName}</strong>! 💪
            </p>
          ) : (
            <p className="input-hint">
              Please enter a member name.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;