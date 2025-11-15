import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import Background from "./Background";
import about from "./assets/about-us.png";
import logo from "./assets/logo.png";


import AnalysisReport from "./AnalysisReport";

/* --------------------------------------------- */
/* ANIMATION COMPONENTS */
/* --------------------------------------------- */


const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, amount: 0.5 }} 
  >
    {children}
  </motion.div>
);
const GradientGlowText = ({ text, delay = 0 }) => {
    return (
        <motion.h1
            className="gradient-glow-text" // Apply the special CSS class here
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
        >
            {text}
        </motion.h1>
    );
};
const PopIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0.85, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: false }}
  >
    {children}
  </motion.div>
);

const SlideLeft = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: false }}
  >
    {children}
  </motion.div>
);

const SlideRight = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: false }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/analysis" element={<AnalysisReport />} />
    </Routes>
  );
}

/* ------------------------------- */
/* HOME PAGE COMPONENT */
/* ------------------------------- */
function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* ---------------------------------- */}
      {/* SECTION 1: HERO */}
      {/* ---------------------------------- */}
      <Background/>
      <div className="app-bg">
        {/* <video className="bg-video" src={bgGif} autoPlay loop muted playsInline /> */}

        <div className="overlay">
          <header className="logo-header">
            <img src={logo} alt="Company Logo" className="header-logo" />
            Incubator AI
          </header>

          <div className="content">
            <PopIn delay={0.2}>
              <h1 className="quote-animate">
                “What if your next idea could change the world — but you knew beforehand if it’s worth pursuing?”
              </h1>
            </PopIn>

            <PopIn delay={0.35}>
              <button
                className="cta-button"
                onClick={() =>
                  document.getElementById("ideaForm").scrollIntoView({ behavior: "smooth" })
                }
              >
                Evaluate Your Idea Now
              </button>
            </PopIn>
          </div>
        </div>
      </div>

      {/* ---------------------------------- */}
      {/* ABOUT SECTION */}
      {/* ---------------------------------- */}
      <section className="about-section" >
        <div className="about-container">
          <SlideLeft>
            <div className="about-text">

              <h2><GradientGlowText text="About Incubator AI" delay={0.2} /></h2>
              <p>
                Incubator AI is a platform dedicated to transforming raw inspiration into viable ventures. We believe that every groundbreaking idea deserves a clear path to execution. Our service provides advanced validation and strategic insights, helping innovators skip the guesswork and focus on what truly matters: **building a better future.**
              </p>
              <p>
                We bring together data science, market analysis, and expert mentorship to stress-test your concepts, ensuring you invest your time and resources into ideas with proven potential. Join us to forge your next big idea with confidence.
              </p>
            </div>
          </SlideLeft>

          <SlideRight>
            <div className="about-visual">
              <img src={about} alt="Abstract illustration of an idea being validated by AI" className="about-image" />
            </div>
          </SlideRight>
        </div>
      </section>

      {/* ---------------------------------- */}
      {/* FEATURES SECTION */}
      {/* ---------------------------------- */}
      <section className="features-section" >
        <div className="features-container">
          <h2>Features</h2>

          {/* (01) */}
          <div className="feature-item">
            <SlideLeft>
              <div className="feature-text">
                <h3>01. Innovation Score</h3>
                <p>How unique and original the idea is vs. existing solutions.</p>
              </div>
            </SlideLeft>
            <SlideRight>
              <div className="feature-visual">[Visual for Innovation Score]</div>
            </SlideRight>
          </div>

          {/* (02) */}
          <div className="feature-item feature-reverse">
            <SlideRight>
              <div className="feature-text">
                <h3>02. Feasibility Analysis</h3>
                <p>Technical + operational difficulty, team requirements, timeline realism.</p>
              </div>
            </SlideRight>

            <SlideLeft>
              <div className="feature-visual">[Visual for Feasibility Analysis]</div>
            </SlideLeft>
          </div>

          {/* (03) */}
          <div className="feature-item">
            <SlideLeft>
              <div className="feature-text">
                <h3>03. Market Analysis</h3>
                <p>Approx audience size, industry level, whether the market is growing or saturated.</p>
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="feature-visual">[Visual for Market Size]</div>
            </SlideRight>
          </div>

          {/* (04) */}
          <div className="feature-item feature-reverse">
            <SlideRight>
              <div className="feature-text">
                <h3>04. Competition Analysis</h3>
                <p>Top competitors, overlap of features, and differentiation strengths.</p>
              </div>
            </SlideRight>

            <SlideLeft>
              <div className="feature-visual">[Visual for Competition Analysis]</div>
            </SlideLeft>
          </div>

          {/* (05) */}
          <div className="feature-item">
            <SlideLeft>
              <div className="feature-text">
                <h3>05. SWOT Report</h3>
                <p>Strengths, Weaknesses, Opportunities, Threats — tailored to the idea.</p>
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="feature-visual">[Visual for SWOT Report]</div>
            </SlideRight>
          </div>

          {/* (06) */}
          <div className="feature-item feature-reverse">
            <SlideRight>
              <div className="feature-text">
                <h3>06. AI Feedback Summary</h3>
                <p>3–5 actionable suggestions to improve or pivot the idea.</p>
              </div>
            </SlideRight>

            <SlideLeft>
              <div className="feature-visual">[Visual for AI Feedback]</div>
            </SlideLeft>
          </div>

          {/* (07) */}
          <div className="feature-item">
            <SlideRight>
              <div className="feature-text">
                <h3>07. Target Audience</h3>
                <p>Customer personas, pain points, behavior patterns, and motivation.</p>
              </div>
            </SlideRight>

            <SlideRight>
              <div className="feature-visual">[Visual for Audience Profile]</div>
            </SlideRight>
          </div>

          {/* (08) */}
          <div className="feature-item feature-reverse">
            <SlideRight>
              <div className="feature-text">
                <h3>08. Impact Potential</h3>
                <p>Long-term value, social/industry impact, scalability.</p>
              </div>
            </SlideRight>

            <SlideLeft>
              <div className="feature-visual">[Visual for Impact Potential]</div>
            </SlideLeft>
          </div>

          {/* (09) */}
          <div className="feature-item">
            <SlideLeft>
              <div className="feature-text">
                <h3>9. Monetization Plan Generator</h3>
                <p>Revenue model suggestions + rating of each model’s sustainability.</p>
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="feature-visual">[Visual for Monetization Plan]</div>
            </SlideRight>
          </div>

          {/* (10) */}
          <div className="feature-item feature-reverse">
            <SlideRight>
              <div className="feature-text">
                <h3>10. Funding & Cost Estimator</h3>
                <p>Estimated MVP cost, team needs, and recommended funding stage.</p>
              </div>
            </SlideRight>

            <SlideLeft>
              <div className="feature-visual">[Visual for Funding & Cost]</div>
            </SlideLeft>
          </div>
        </div>
      </section>

      {/* ---------------------------------- */}
      {/* IDEA FORM SECTION */}
      {/* ---------------------------------- */}
      <section id="ideaForm" className="form-section" >
        <div className="form-container">
          <FadeUp delay={0.2}>
            <h2>Submit Your Idea for Analysis</h2>
          </FadeUp>

          <FadeUp delay={0.35}>
            <p>Ready to validate your next big idea? Tell us about it below!</p>
          </FadeUp>

          <PopIn delay={0.5}>
            <form
              className="idea-form"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/analysis");
              }}
            >
              <div className="form-group">
                <label htmlFor="ideaTitle">Idea Title *</label>
                <input type="text" required placeholder="eg: AI-Powered Wellness Coach" />
              </div>

              <div className="form-group">
                <label>Problem Statement (Optional)</label>
                <textarea placeholder="What problem does your idea solve?"></textarea>
              </div>

              <div className="form-group">
                <label>Detailed Description *</label>
                <textarea required placeholder="Describe your solution..."></textarea>
              </div>

              <button type="submit" className="form-submit-button">
                Get My Report
              </button>
            </form>
          </PopIn>
        </div>
      </section>

      {/* ---------------------------------- */}
      {/* FOOTER */}
      {/* ---------------------------------- */}
      <FadeUp>
        <footer className="app-footer" >
          <div className="footer-overlay">
            <div className="footer-container">
              <div className="footer-col brand-info">
                <h3>Incubator AI</h3>
                <p>© {new Date().getFullYear()} Incubator AI. All rights reserved.</p>
              </div>

              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#features">Features</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>

              <div className="footer-col contact-info">
                <h4>Get in Touch</h4>
                <p>info@incubatorai.com</p>
              </div>
            </div>
          </div>
        </footer>
      </FadeUp>
    </>
  );
}

