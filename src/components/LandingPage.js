import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Custom styles here

const LandingPage = () => {
  return (
    <section className="landing-section">
      <div className="landing-container">
        <header className="header">
          <div className="logo">Voluntry</div>
          <nav className="navbar">
            <Link to="/">Home</Link>

            <Link to="/about-us">About Us</Link>

            {/* <Link to="/login">Login</Link> */}
            <Link to="/register">Register</Link>
          </nav>
        </header>
        <main className="main-content">
          <div className="animated-ui">
            <h1>Welcome to Voluntry</h1>
            <p>Make a difference in your community—volunteer today and help create a better tomorrow.</p>
          </div>
        </main>
        <footer className="footer">
          <div className="contact-details">
            <p>Email: Voluntry@gmail.com | Phone: +94753648410</p>
          </div>
          <div className="volunteer-quote">
            <p>"Volunteers do not necessarily have the time; they just have the heart."</p>
          </div>
          <div className="copyright">
            &copy; 2024 Voluntry. All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
};

export default LandingPage;
