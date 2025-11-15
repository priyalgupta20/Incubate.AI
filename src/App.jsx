import React from "react";
import "./App.css";
import bg from "./assets/bg.png"; // background image
import logo from "./assets/logo.png"; // Updated logo import (Note: Changed back to .jpg based on your last provided code)
import aboutBg from "./assets/about-bg.jpg"; // Background for About section
import featuresBg from "./assets/features-bg.jpg";
import footerBg from "./assets/footer-bg.jpg";
import bgGif from "./assets/bg.mp4"
import bg2gif from "./assets/bg2.mp4"

export default function App() {
  return (
    <>
      {/* ---------------------------------- */}
      {/* SECTION 1: FULL SCREEN HERO */}
      {/* ---------------------------------- */}
      <div
        className="app-bg"
         
      >
         <video
    className="bg-video"
    src={bgGif}
    autoPlay
    loop
    muted
    playsInline
  />
        <div className="overlay">
          
          <header className="logo-header">
              <img src={logo} alt="Company Logo" className="header-logo" />
              IdeaForge
          </header>

          <div className="content" >
            <h1 className="quote-animate">“What if your next idea could change the world — but you knew beforehand if it’s worth pursuing?”</h1>
            <button  className="cta-button" 
  onClick={() => {
    document.getElementById("ideaForm").scrollIntoView({ behavior: "smooth" });
  }}
>
  Evaluate Your Idea Now
</button>
          </div>
        
 


        </div>
      </div>

      {/* ---------------------------------- */}
      {/* SECTION 2: ABOUT US */}
      {/* ---------------------------------- */}
      <section 
          className="about-section"
          style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="about-container">
          
          <div className="about-text">
            <h2>About IdeaForge</h2>
            <p>
              IdeaForge is a platform dedicated to transforming raw inspiration into viable ventures. 
              We believe that every groundbreaking idea deserves a clear path to execution. 
              Our service provides advanced validation and strategic insights, helping innovators 
              skip the guesswork and focus on what truly matters: **building a better future.**
            </p>
            <p>
              We bring together data science, market analysis, and expert mentorship to stress-test 
              your concepts, ensuring you invest your time and resources into ideas with proven potential. 
              Join us to forge your next big idea with confidence.
            </p>
          </div>

          <div className="about-visual">
            <p>[Place your About Us image or visual here]</p>
          </div>

        </div>
      </section>

      {/* ---------------------------------- */}
      {/* SECTION 3: FEATURES (NEW SECTION) */}
      {/* ---------------------------------- */}
      <section 
        className="features-section"
        style={{ backgroundImage: `url(${featuresBg})` }} // <-- ADD INLINE STYLE HERE
      >
        <div className="features-container">
          
          <h2>Analysis Output Features</h2> {/* <-- NEW: Main Section Heading */}

          {/* Feature 1: Image on Right (Default Flex Order) */}
          <div className="feature-item">
            <div className="feature-text">
                <h3>01. Innovation Score</h3>
                <p>How unique and original the idea is vs. existing solutions.</p>
            </div>
            <div className="feature-visual">
                [Visual for Innovation Score]
            </div>
          </div>

          {/* Feature 2: Image on Left (Reversed Order) */}
          <div className="feature-item feature-reverse">
            <div className="feature-text">
                <h3>02. Feasibility Analysis</h3>
                <p>Technical + operational difficulty, team requirements, timeline realism.</p>
            </div>
            <div className="feature-visual">
                [Visual for Feasibility Analysis]
            </div>
          </div>

          {/* Feature 3: Image on Right */}
          <div className="feature-item">
            <div className="feature-text">
                <h3>03. Market Size Estimate</h3>
                <p>Approx audience size, industry level, whether the market is growing or saturated.</p>
            </div>
            <div className="feature-visual">
                [Visual for Market Size]
            </div>
          </div>

          {/* Feature 4: Image on Left */}
          <div className="feature-item feature-reverse">
            <div className="feature-text">
                <h3>04. Competition Analysis</h3>
                <p>Top competitors, overlap of features, and differentiation strengths.</p>
            </div>
            <div className="feature-visual">
                [Visual for Competition Analysis]
            </div>
          </div>

          {/* Feature 5: Image on Right */}
          <div className="feature-item">
            <div className="feature-text">
                <h3>05. SWOT Report</h3>
                <p>Strengths, Weaknesses, Opportunities, Threats — tailored to the idea.</p>
            </div>
            <div className="feature-visual">
                [Visual for SWOT Report]
            </div>
          </div>

          {/* Feature 6: Image on Left */}
          <div className="feature-item feature-reverse">
            <div className="feature-text">
                <h3>06. AI Feedback Summary</h3>
                <p>3–5 actionable suggestions to improve or pivot the idea.</p>
            </div>
            <div className="feature-visual">
                [Visual for AI Feedback]
            </div>
          </div>

          {/* Feature 7: Image on Right */}
          <div className="feature-item">
            <div className="feature-text">
                <h3>07. Target Audience Profile</h3>
                <p>Customer personas, pain points, behavior patterns, and motivation.</p>
            </div>
            <div className="feature-visual">
                [Visual for Audience Profile]
            </div>
          </div>

          {/* Feature 8: Image on Left */}
          <div className="feature-item feature-reverse">
            <div className="feature-text">
                <h3>08. Impact Potential</h3>
                <p>Long-term value, social/industry impact, scalability.</p>
            </div>
            <div className="feature-visual">
                [Visual for Impact Potential]
            </div>
          </div>

          {/* Feature 9: Image on Right */}
          <div className="feature-item">
            <div className="feature-text">
                <h3>09. Idea Category Tag</h3>
                <p>Auto-detected niche (e.g., HealthTech, EdTech, AI SaaS, E-commerce…).</p>
            </div>
            <div className="feature-visual">
                [Visual for Idea Category]
            </div>
          </div>

          {/* Feature 10: Image on Left */}
          <div className="feature-item feature-reverse">
            <div className="feature-text">
                <h3>10. Pitch Summary (One-Liner)</h3>
                <p>A crisp startup-style tagline written by AI.</p>
            </div>
            <div className="feature-visual">
                [Visual for Pitch Summary]
            </div>
          </div>

          {/* Feature 11: Image on Right */}
          <div className="feature-item">
            <div className="feature-text">
                <h3>11. Monetization Plan Generator</h3>
                <p>Revenue model suggestions + rating of each model’s sustainability.</p>
            </div>
            <div className="feature-visual">
                [Visual for Monetization Plan]
            </div>
          </div>

          {/* Feature 12: Image on Left */}
          <div className="feature-item feature-reverse">
            <div className="feature-text">
                <h3>12. Funding & Cost Estimator</h3>
                <p>Estimated MVP cost, team needs, and recommended funding stage.</p>
            </div>
            <div className="feature-visual">
                [Visual for Funding & Cost]
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------- */}
      {/* SECTION 4: IDEA SUBMISSION FORM (UPDATED CODE) */}
      {/* ---------------------------------- */}
      <section 
          className="form-section"
          style={{ backgroundImage: `url(${aboutBg})` }} // <-- Apply Form Background
      >
        <section 
    id="ideaForm"
    className="form-section"
    style={{ backgroundImage: `url(${aboutBg})` }}
></section>
        <div className="form-container">
            <h2>Submit Your Idea for Analysis</h2>
            <p>Ready to validate your next big idea? Tell us about it below!</p>
            
            <form className="idea-form">
                
                <div className="form-group">
                    {/* Required Label */}
                    <label htmlFor="ideaTitle">Idea Title *</label> 
                    <input 
                        type="text" 
                        id="ideaTitle" 
                        name="ideaTitle" 
                        placeholder="e.g., AI-Powered Wellness Coach" // <-- Placeholder added
                        required 
                    />
                </div>
                
                <div className="form-group">
                    {/* Optional Label */}
                    <label htmlFor="problemStatement">Problem Statement (Optional)</label>
                    <textarea 
                        id="problemStatement" 
                        name="problemStatement" 
                        rows="3"
                        placeholder="What specific problem does your idea solve?" // <-- Placeholder added
                    ></textarea>
                </div>

                <div className="form-group">
                    {/* Required Label */}
                    <label htmlFor="description">Detailed Description *</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        rows="5" 
                        placeholder="Describe your solution, technology, and target user." // <-- Placeholder added
                        required
                    ></textarea>
                </div>
                
                <div className="form-group">
                    {/* Optional Label */}
                    <label htmlFor="features">Key Features / Functionality (Optional)</label>
                    <textarea 
                        id="features" 
                        name="features" 
                        rows="3"
                        placeholder="List the main features or service offerings." // <-- Placeholder added
                    ></textarea>
                </div>

                <button type="submit" className="form-submit-button">Get My IdeaForge Report</button>

            </form>
        </div>
      </section>

      {/* ---------------------------------- */}
      {/* SECTION 5: FOOTER (NEW CODE) */}
      {/* ---------------------------------- */}
      <footer 
          className="app-footer"
          style={{ backgroundImage: `url(${footerBg})` }} // <-- Apply Footer Background
      >
          <div className="footer-overlay">
              <div className="footer-container">
                  
                  {/* Column 1: Logo and Copyright */}
                  <div className="footer-col brand-info">
                      <h3>IdeaForge</h3>
                      <p>&copy; {new Date().getFullYear()} IdeaForge. All rights reserved.</p>
                  </div>

                  {/* Column 2: Quick Links */}
                  <div className="footer-col">
                      <h4>Company</h4>
                      <ul>
                          <li><a href="#about">About Us</a></li>
                          <li><a href="#features">Features</a></li>
                          <li><a href="#">Careers</a></li>
                      </ul>
                  </div>

                  {/* Column 3: Legal */}
                  <div className="footer-col">
                      <h4>Legal</h4>
                      <ul>
                          <li><a href="#">Privacy Policy</a></li>
                          <li><a href="#">Terms of Service</a></li>
                          <li><a href="#">FAQ</a></li>
                      </ul>
                  </div>

                  {/* Column 4: Contact/Social */}
                  <div className="footer-col contact-info">
                      <h4>Get in Touch</h4>
                      <p>info@ideaforge.com</p>
                      <div className="social-links">
                          {/* Placeholder for social media icons */}
                          [Social Media Icons Placeholder]
                      </div>
                  </div>

              </div>
          </div>
      </footer>
    </>
  );
}