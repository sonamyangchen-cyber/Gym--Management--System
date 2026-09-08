import "./Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Gym Management System</p>
      <p>© {currentYear} All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;