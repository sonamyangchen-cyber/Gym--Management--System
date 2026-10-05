import { useState } from "react";
import Button from "../../components/common/Button";

function Dashboard() {
  const [count, setCount] = useState(0);
  const [memberName, setMemberName] = useState("");

  return (
    <div>
      <title>Dashboard - Gym Management System</title>

      <h1>Gym Dashboard</h1>

      <p>Dashboard placeholder for gym management.</p>

      <h2>Members Checked In: {count}</h2>

      <Button onClick={() => setCount(count + 1)}>
        Check In Member
      </Button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter member name"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
      />

      {memberName ? (
        <p>Welcome, {memberName}!</p>
      ) : (
        <p>Please enter a member name.</p>
      )}
    </div>
  );
}

export default Dashboard;