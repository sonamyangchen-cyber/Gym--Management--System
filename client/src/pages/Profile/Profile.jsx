import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Profile() {
  const handleClick = () => {
    alert("Profile settings selected!");
  };

  return (
    <div className="profile">
      <PageTitle title="User Profile" />

      <Card
        title="👤 Member Profile"
        description="View and manage your personal information and gym membership details."
      />

      <Card
        title="🏆 Fitness Goals"
        description="Keep track of your fitness goals and progress."
      />

      <Button text="Profile Settings" onClick={handleClick} />
    </div>
  );
}

export default Profile;