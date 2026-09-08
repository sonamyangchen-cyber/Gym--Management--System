import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Login() {
  const handleLogin = () => {
    alert("Login button clicked!");
  };

  return (
    <div className="login">
      <PageTitle title="Login" />

      <Card
        title="🔐 Welcome Back"
        description="Login to your Gym Management System account to continue."
      >
        <Button text="Login" onClick={handleLogin} />
      </Card>
    </div>
  );
}

export default Login;