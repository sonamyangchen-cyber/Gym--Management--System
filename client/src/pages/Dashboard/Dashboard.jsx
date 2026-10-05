<<<<<<< HEAD
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
=======
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Dashboard() {
  const handleClick = () => {
    alert("Welcome to the Gym Dashboard!");
  };

  return (
    <div className="dashboard">
      <PageTitle title="Gym Dashboard" />

      <p>Manage your gym activities from one place.</p>

      <div className="dashboard-cards">
        <Card
          title="👥 Members"
          description="Manage gym members and their information."
        />

        <Card
          title="🏋️ Workouts"
          description="View and manage workout programs."
        />

        <Card
          title="🧑‍🏫 Trainers"
          description="Manage trainers and training sessions."
        />
      </div>

      <Button text="View Dashboard" onClick={handleClick} />
>>>>>>> e0772abdddc4d00cda839465670c105c56a1a086
    </div>
  );
}

export default Dashboard;