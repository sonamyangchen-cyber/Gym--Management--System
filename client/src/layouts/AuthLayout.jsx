function AuthLayout({ children }) {
  return (
    <div>
      <h1>Gym Management System</h1>

      <main>
        {children}
      </main>
    </div>
  );
}

export default AuthLayout;