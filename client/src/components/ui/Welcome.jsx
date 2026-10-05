function Welcome({ name, project }) {
  return (
    <div className="welcome">
      <h2>Welcome, {name}!</h2>
      <p>Welcome to {project}.</p>
    </div>
  );
}

export default Welcome;