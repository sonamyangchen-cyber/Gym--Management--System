import Welcome from "../../components/ui/Welcome";
import { Link } from "react-router-dom"
import "./Home.css";

function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">FITNESS • HEALTH • COMMUNITY</span>

          <h1>
            Build Your
            <span> Stronger </span>
            Self
          </h1>

          <p>
            Manage your workouts, memberships, trainers, and fitness journey
            all in one simple place.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Explore Programs</button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>500+</strong>
              <span>Members</span>
            </div>

            <div>
              <strong>25+</strong>
              <span>Trainers</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Programs</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-card">
            <div className="image-placeholder">
              <span>GYM</span>
              <strong>TRAIN HARD</strong>
              <small>STAY CONSISTENT</small>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="section-heading">
          <span>WHY CHOOSE US</span>
          <h2>Everything You Need to Stay Fit</h2>
          <p>
            A simple and modern system designed to make gym management easier.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🏋️</div>
            <h3>Workout Programs</h3>
            <p>
              Follow structured workout plans and keep track of your progress.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>Member Management</h3>
            <p>
              Easily manage member profiles, memberships, and attendance.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧑‍🏫</div>
            <h3>Personal Trainers</h3>
            <p>
              Connect members with trainers and manage training sessions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track Progress</h3>
            <p>
              Monitor fitness progress with clear and useful statistics.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div>
          <span>START YOUR JOURNEY</span>
          <h2>Ready to become stronger?</h2>
          <p>
            Join our fitness community and take control of your goals.
          </p>
        </div>

        <button className="primary-btn">Join Now →</button>
      </section>
    </main>
  );
}

export default Home;