<<<<<<< HEAD
import Welcome from "../../components/ui/Welcome";
import { Link } from "react-router-dom"
=======

import { Link } from "react-router-dom";
>>>>>>> e0772abdddc4d00cda839465670c105c56a1a086
import "./Home.css";

import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">FITNESS • HEALTH • COMMUNITY</span>

          <PageTitle title="Build Your Stronger Self" />

          <p>
            Manage your workouts, memberships, trainers, and fitness journey
            all in one simple place.
          </p>

          <div className="hero-buttons">
           <Button text="Get Started" />
            <Button text="Explore Programs" />
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
  <Card
    title="🏋️ Workout Programs"
    description="Follow structured workout plans and keep track of your progress."
  />

  <Card
    title="👤 Member Management"
    description="Easily manage member profiles, memberships, and attendance."
  />

  <Card
    title="🧑‍🏫 Personal Trainers"
    description="Connect members with trainers and manage training sessions."
  />

  <Card
    title="📊 Track Progress"
    description="Monitor fitness progress with clear and useful statistics."
  />
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