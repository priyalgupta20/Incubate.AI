import React, { useState, useEffect } from 'react';
import './AnalysisReport.css';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const COLORS = ["#4e8ef4ff", "#ee4848ff", "#64e766ff", "#F6AD55"];
const PRIMARY = "#63B3ED";
const SECONDARY = "#4FD1C5";
const ANIM_TIME = 1400;

// ------------------------
// CONVERT API TO UI FORMAT
// ------------------------
function convertApiToUi(api) {
  return {
    title: api.idea_title,
    category: api.idea_category,
    overall:{
      overallRating:api.overall_rating.score,
      overallexpln:api.overall_rating.summary_justification},

    innovation: {innovationScore: api.innovation_score.score, innovationScore_Explanation: api.innovation_score.explanation},

    feasibility: {
      technical: api.feasibility_analysis.technical_difficulty_level,
      operational: api.feasibility_analysis.operational_difficulty_level,
      financial: api.feasibility_analysis.financial_difficulty_level,
      techDetails: api.feasibility_analysis.tech_details,
      timeline: api.feasibility_analysis.timeline
    },

    market: {
      sizeExplanation: api.market_size.explanation_text,
      trend: api.market_size.market_trend
    },

    competition: {
      top5: api.competition_analysis.top_competitors,
      explanation: api.competition_analysis.differentiation_niche,
      scores: api.competition_analysis.competition_scores
    },

    audience: {
      biggestTarget: api.target_audience.primary_persona,
      breakdown: api.target_audience.audience_breakdown
    },

    swot: {
      strength: api.swot_report.strengths.join(", "),
      weakness: api.swot_report.weaknesses.join(", "),
      opportunity: api.swot_report.opportunities.join(", "),
      threat: api.swot_report.threats.join(", ")
    },

    aiFeedback: api.ai_feedback_summary.suggestions.join(" "),

    impact: {
      potentialScore: api.impact_potential.potential_score,
      explanation: api.impact_potential.explanation
    },

    monetization: {
      plan: api.monetization_plan.models,
      suggestedPricing: api.monetization_plan.suggested_pricing
    },

    funding: {
      estimatedCost: api.funding_estimator.estimated_cost,
      paragraph: api.funding_estimator.justification_paragraph
    },

    one_line_expln: {
      line: api.one_line_expln.line
    }
  };
}

// ================================
//     MAIN COMPONENT — FIXED
// ================================
const AnalysisReport = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [api, setApi] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 FIX: Loader must run BEFORE any UI mounts
  useEffect(() => {
    if (state?.api) {
      setApi(state.api);

      setTimeout(() => {
        setLoading(false);
      }, 1200);
    } else if (state?.loading) {
      setLoading(true);   // keep loader ON
    } else {
      setLoading(false);  // user opened page manually
    }
  }, [state]);

  // 🔥 FIX: Nothing renders before loader
  if (loading) return <Loader />;

  // If user came without data
  if (!api) {
    return (
      <div>
        No analysis found. Please submit your idea first.
        <div className="go-home-container">
          <button onClick={() => navigate("/")} className="go-home-btn">
            🏠 Go Back Home
          </button>
        </div>
      </div>
    );
  }

  // Convert data
  const reportData = convertApiToUi(api);
  const marketData = reportData.market.trend;
  const competitionData = reportData.competition.scores;
  const audienceData = reportData.audience.breakdown;

  const {
    title, category, overall, innovation,
    feasibility, market, competition, audience,
    swot, aiFeedback, impact,
    monetization, funding
  } = reportData;

  // ============================
  //         RETURN UI
  // ============================
  return (
    <div className="report-page-container dark-theme fade-in">

      {/* HEADER */}
      <div className="report-header fade-slide-down">
        <h1>{title}</h1>
        <span className="header-category-tag">{category}</span>

        <div className="pitch-summary pulse-on-hover">
          <p className="pitch-text">{reportData.one_line_expln.line}</p>
        </div>

        <div className="core-stats-wrapper">

          <div className="stat-card slider-score-card vibrant-card innovation-side fade-zoom-in">
            <div className="slider-score-content">
              <h3>Innovation Score</h3>
              <div className="slider-container">
                <div className="slider-fill" style={{ background: PRIMARY, width: `${innovation.innovationScore * 10}%` }}></div>
                <div className="slider-thumb" style={{ background: SECONDARY, left: `${innovation.innovationScore * 10}%` }}>
                  {innovation.innovationScore}/10
                </div>
              </div>
              <p className="slider-desc">{innovation.innovationScore_Explanation}</p>
            </div>
          </div>

          <div className="overall-rating-center fade-zoom-in">
            <div className="center-rating-circle">
              <span className="rating-value">{overall.overallRating}</span>
              <span className="rating-max">/100</span>
            </div>
            <p className="rating-label">Overall Rating</p>
          </div>

          <div className="stat-card slider-score-card vibrant-card impact-side fade-zoom-in">
            <div className="slider-score-content">
              <h3>Impact Potential</h3>
              <div className="slider-container">
                <div className="slider-fill" style={{ background: PRIMARY, width: `${impact.potentialScore * 10}%` }}></div>
                <div className="slider-thumb" style={{ background: SECONDARY, left: `${impact.potentialScore * 10}%` }}>
                  {impact.potentialScore}/10
                </div>
              </div>
              <p className="slider-desc">{impact.explanation}</p>
            </div>
          </div>

        </div>
      </div>

      {/* CHARTS */}
      <div className="data-visuals-grid fade-slide-up">

        {/* Feasibility */}
        <div className="visual-card feasibility-card elevated-card fade-zoom-in">
          <h3>Feasibility Analysis</h3>
          <BarChart width={330} height={200} data={[
            { label: 'Technical', value: feasibility.technical === 'High' ? 90 : 60 },
            { label: 'Operational', value: feasibility.operational === 'High' ? 90 : 60 },
            { label: 'Financial', value: feasibility.financial === 'High' ? 90 : 60 },
          ]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
            <XAxis dataKey="label" stroke="#CBD5E0" />
            <YAxis stroke="#CBD5E0" />
            <Tooltip />
            <Bar dataKey="value" fill={COLORS[2]} animationDuration={ANIM_TIME} barSize={25} />
          </BarChart>
          <p>{feasibility.techDetails}</p>
        </div>

        {/* Market */}
        <div className="visual-card market-card elevated-card fade-zoom-in">
          <h3>Market Size Estimate</h3>
          <LineChart width={330} height={200} data={marketData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
            <XAxis dataKey="year" stroke="#CBD5E0" />
            <YAxis stroke="#CBD5E0" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#5D3FD3" strokeWidth={3} animationDuration={ANIM_TIME} />
          </LineChart>
          <p className="explanation-line">{market.sizeExplanation}</p>
        </div>

        {/* Competition */}
        <div className="visual-card competition-card elevated-card fade-zoom-in">
          <h3>Competition Analysis</h3>
          <BarChart width={330} height={200} data={competitionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
            <XAxis dataKey="name" stroke="#CBD5E0" />
            <YAxis stroke="#CBD5E0" />
            <Tooltip />
            <Bar dataKey="score" fill="yellow" animationDuration={ANIM_TIME} barSize={25} />
          </BarChart>
          <p><strong>Top Competitors:</strong> {competition.top5.join(', ')}</p>
          <p className="explanation-line">{competition.explanation}</p>
        </div>

        {/* Audience */}
        <div className="visual-card audience-card elevated-card fade-zoom-in">
          <h3>Target Audience Profile</h3>
          <PieChart width={330} height={200}>
            <Pie
              data={audienceData}
              cx={150}
              cy={90}
              outerRadius={70}
              dataKey="value"
              label
              animationDuration={ANIM_TIME}
            >
              {audienceData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <p className="target-name">Biggest Target: <strong>{audience.biggestTarget}</strong></p>
        </div>

      </div>

      {/* SWOT & AI Feedback */}
      <div className="deep-dive-section fade-slide-up">
        <div className="swot-grid fade-zoom-in">
          <h2 className="swot-title">SWOT Analysis</h2>
          <div className="swot-item strength swot-dynamic"><h4>Strength 🟢</h4><p>{swot.strength}</p></div>
          <div className="swot-item weakness swot-dynamic"><h4>Weakness 🔴</h4><p>{swot.weakness}</p></div>
          <div className="swot-item opportunity swot-dynamic"><h4>Opportunity 🟡</h4><p>{swot.opportunity}</p></div>
          <div className="swot-item threat swot-dynamic"><h4>Threat 🟣</h4><p>{swot.threat}</p></div>
        </div>

        <div className="ai-feedback-section vibrant-card elevated-card fade-zoom-in">
          <h2>AI Feedback Summary</h2>
          <p>{aiFeedback}</p>
        </div>
      </div>

      {/* FINANCIAL SECTION */}
      <div className="financial-section fade-slide-up">

        <div className="plan-card monetization-card elevated-card fade-zoom-in">
          <h3>Monetization Plan Generator</h3>
          <ul>
            {monetization.plan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p><strong>Suggested Pricing Model:</strong> {monetization.suggestedPricing}</p>
        </div>

        <div className="plan-card funding-card elevated-card fade-zoom-in">
          <h3>Funding & Cost Estimator</h3>
          <p>{funding.paragraph}</p>
          <p className="estimated-cost-tag">
            Estimated MVP Cost: <strong>{funding.estimatedCost}</strong>
          </p>
        </div>

      </div>

      {/* HOME BUTTON */}
      <div className="go-home-container">
        <button onClick={() => navigate("/")} className="go-home-btn">
          🏠 Go Back Home
        </button>
      </div>

    </div>
  );
};

export default AnalysisReport;
