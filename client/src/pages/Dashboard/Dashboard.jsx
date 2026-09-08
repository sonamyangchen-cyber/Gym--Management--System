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
    </div>
  );
}

export default Dashboard;