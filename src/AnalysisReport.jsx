import React, { useState } from 'react';
import './AnalysisReport.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Dark mode friendly colors
const COLORS = ["#4e8ef4ff", "#ee4848ff", "#64e766ff", "#F6AD55"]; // teal, blue, orange, red
const PRIMARY = "#63B3ED";
const SECONDARY = "#4FD1C5";

// Animation duration
const ANIM_TIME = 1400;

// // Example datasets
// const marketData = [
// { year: 2020, value: 3 },
// { year: 2021, value: 3.8 },
// { year: 2022, value: 4.5 },
// { year: 2023, value: 5 },
// { year: 2024, value: 5.7 },
// ];

// const competitionData = [
// { name: 'Eventbrite', score: 80 },
// { name: 'Peerspace', score: 70 },
// { name: 'Splacer', score: 60 },
// { name: 'VenueBook', score: 50 },
// ];

// const audienceData = [
// { name: 'Event Organizers', value: 50 },
// { name: 'Individuals', value: 35 },
// { name: 'Corporate Teams', value: 15 },
// ];

// const mockData = {
// title: "AI-Powered Event Space Rental Platform",
// category: "PropTech / B2B SaaS",
// overallRating: 82,
// innovationScore: 9,
// feasibility: {
// technical: "High",
// operational: "Medium",
// financial: "High",
// techDetails: "Requires advanced booking API and secure payment gateway.",
// timeline: "6-9 months MVP"
// },
// market: {
// sizeExplanation: "The addressable market is large ($5B+ in major US cities) and currently growing at 10% annually, but is highly fragmented.",
// },
// competition: {
// top5: ["Eventbrite", "Peerspace", "Splacer", "VenueBook", "Local Agents"],
// explanation: "Niche is to focus on unique, non-traditional venues (e.g., rooftops, warehouses).",
// },
// audience: {
// biggestTarget: "Event Organizers & Individuals",
// },
// swot: {
// strength: "Strong local partnership model; low capital expenditure initially.",
// weakness: "High dependence on venue owner buy-in; intense initial sales effort required.",
// opportunity: "Expand into adjacent services (catering, equipment rental); geographical expansion.",
// threat: "Existing large platforms adding niche venue listings; local regulatory changes.",
// },
// aiFeedback: "Focus initial marketing efforts heavily on social media platforms targeting local event coordinators. Explore a tiered subscription model for venues offering premium analytics. Partner with 3-5 key local venues initially to build high-quality case studies and trust.",
// impact: {
// potentialScore: 8.5,
// explanation: "High long-term value due to network effects and high scalability across major global urban areas. Social impact through maximizing underutilized urban spaces.",
// },
// monetization: {
// plan: [
// "Subscription (SaaS) for Venue Owners (Premium analytics & priority listing).",
// "Transaction Fees (5-10% of booking value paid by the renter).",
// "Featured Listings (One-time fee for top placements in search results)."
// ],
// suggestedPricing: "Venue SaaS: $49/month. Transaction Fee: 7%.",
// },
// funding: {
// estimatedCost: "$150,000 - $250,000",
// paragraph: "Recommended funding stage is Seed or Pre-Seed. Funds should primarily cover 6-9 months of development team salaries and initial local market acquisition efforts."
// }
// };

// const api={
//   "idea_title": "AI-Powered Event Space Rental Platform",
//   "idea_category": "PropTech / B2B SaaS",
//   "pitch_one_liner": "The intelligent marketplace maximizing utilization of unique urban event spaces.",
//   "overall_rating": {
//     "score": 88,
//     "summary_justification": "The idea targets a large, fragmented market with a high innovation score and strong network effects potential. High technical feasibility is the primary risk."
//   },
//   "innovation_score": {
//     "score": 9,
//     "explanation": "High originality in focusing exclusively on non-traditional venues (e.g., rooftops, galleries) and utilizing AI for dynamic pricing and renter-venue matching, offering a significant advantage over simple listing sites."
//   },
//   "feasibility_analysis": {
//     "technical_difficulty_level": "High",
//     "operational_difficulty_level": "Medium",
//     "financial_difficulty_level": "Medium",
//     "tech_details": "Requires secure payment processing (Stripe/Braintree integration), complex multi-tenant calendar management, and a custom machine learning model for dynamic pricing based on localized demand signals.",
//     "timeline": "8-10 months to reach beta MVP"
//   },
//   "market_size": {
//     "explanation_text": "The total addressable market (TAM) for event and venue booking in major US and European cities exceeds $10 billion annually. The market is fragmented but growing at a compound annual growth rate (CAGR) of 8.5%.",
//     "market_trend": [
//       { "year": 2020, "value": 7.5 },
//       { "year": 2021, "value": 7.9 },
//       { "year": 2022, "value": 8.7 },
//       { "year": 2023, "value": 9.4 },
//       { "year": 2024, "value": 10.2 }
//     ]
//   },
//   "competition_analysis": {
//     "top_competitors": ["Peerspace", "Eventbrite (indirectly)", "Splacer", "Local Real Estate Agents"],
//     "differentiation_niche": "Strict focus on unique, non-traditional, privately-owned spaces (e.g., rooftops, converted warehouses) combined with AI-driven booking tools. Competitors focus on volume or traditional listings.",
//     "competition_scores": [
//       { "name": "Peerspace", "score": 85 },
//       { "name": "Eventbrite", "score": 60 },
//       { "name": "Splacer", "score": 75 },
//       { "name": "VenueBook", "score": 50 }
//     ]
//   },
//   "target_audience": {
//     "primary_persona": "Professional Event Organizers, Marketing/HR Teams (for corporate events), and Affluent Individuals (for private parties). Pain Points: Lack of unique venue discovery and cumbersome booking process.",
//     "audience_breakdown": [
//       { "name": "Event Organizers", "value": 45 },
//       { "name": "Corporate Teams", "value": 30 },
//       { "name": "Individuals", "value": 25 }
//     ]
//   },
//   "swot_report": {
//     "strengths": [
//       "High perceived innovation and value proposition.",
//       "Strong defensibility through network effects (more venues attract more renters).",
//       "Low capital expenditure on physical assets."
//     ],
//     "weaknesses": [
//       "High initial sales effort required to onboard venues.",
//       "Difficulty ensuring quality and safety standards across heterogeneous venues.",
//       "Reliance on third-party payment/location APIs."
//     ],
//     "opportunities": [
//       "Expansion into adjacent services (catering, equipment rental, security).",
//       "Geographical expansion across tier-1 and tier-2 international cities.",
//       "Licensing AI pricing model to traditional venue management companies."
//     ],
//     "threats": [
//       "Large existing platforms adding niche venue categories.",
//       "Local regulatory changes regarding short-term commercial rentals.",
//       "Economic downturn impacting corporate event budgets."
//     ]
//   },
//   "ai_feedback_summary": {
//     "suggestions": [
//       "Develop a robust legal framework specifically addressing liability for non-traditional spaces to attract cautious venue owners.",
//       "Focus initial marketing on LinkedIn and local trade shows targeting corporate event planners, as they represent the highest LTV (Lifetime Value).",
//       "Offer the first 3 months of the premium SaaS analytics subscription free to venue owners to expedite onboarding and data collection."
//     ]
//   },
//   "impact_potential": {
//     "potential_score": 9.0,
//     "explanation": "High long-term value stemming from the network effect, which creates a competitive moat. It has significant social impact potential by turning underutilized urban assets (e.g., empty rooftops, industrial spaces) into income-generating venues."
//   },
//   "monetization_plan": {
//     "models": [
//       "Transaction Fees (7-12% of total booking value, paid by renter).",
//       "Subscription (SaaS) for Venue Owners (Premium analytics and priority listing).",
//       "Commission on Add-on Services (Catering, A/V)."
//     ],
//     "suggested_pricing": "Venue SaaS Tier: $49/month (Basic) to $99/month (Pro). Transaction Fee: 10%."
//   },
//   "funding_estimator": {
//     "estimated_cost": "$200,000 - $350,000",
//     "recommended_funding_stage": "Seed",
//     "justification_paragraph": "The elevated technical difficulty and the need for intense local sales require substantial initial funding. Funds should cover 10 months of developer salaries (2 engineers) and 6 months of local market acquisition and partnership development."
//   }
// };

function convertApiToUi(api) {
  return {
    title: api.idea_title,
    category: api.idea_category,
    overallRating: api.overall_rating.score,
    innovationScore: api.innovation_score.score,

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
    one_line_expln:{
      line: api.one_line_expln.line
    }
  };
}

const AnalysisReport = () => {
  const { state } = useLocation();
const [api, setApi] = useState(null);
const [loading, setLoading] = useState(true);
const navigate = useNavigate();
useEffect(() => {
  if (state?.api) {
    setApi(state.api);
  }
  setLoading(false);
}, [state]);

const handleGoHome = () => {
    navigate("/"); // Redirects to home page
  };

  if (loading) return <div>Loading analysis...</div>;
if (!api) return (<div>No analysis found. Please submit your idea first.  
  <div className="go-home-container">
  <button onClick={handleGoHome} className="go-home-btn">
    🏠 Go Back Home
  </button>
  </div>
</div>
)
  const reportData = convertApiToUi(api);

  console.log("API Received:", api);
  console.log("Converted:", reportData);
    const marketData=reportData.market.trend;
const competitionData=reportData.competition.scores;
const audienceData=reportData.audience.breakdown;
    const {
  title, category, overallRating, innovationScore, feasibility,
  market, competition, audience, swot, aiFeedback, impact,
  monetization, funding
} = reportData;

    return (
        <div className="report-page-container dark-theme fade-in">
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
                                <div className="slider-fill" style={{ background: PRIMARY, width: `${innovationScore * 10}%` }}></div>
                                <div className="slider-thumb" style={{ background: SECONDARY, left: `${innovationScore * 10}%` }}>{innovationScore}/10</div>
                            </div>
                            <p className="slider-desc">How unique and original the idea is vs. existing solutions.</p>
                        </div>
                    </div>

                    <div className="overall-rating-center fade-zoom-in">
                        <div className="center-rating-circle">
                            <span className="rating-value">{overallRating}</span>
                            <span className="rating-max">/100</span>
                        </div>
                        <p className="rating-label">Overall Rating</p>
                        
                    </div>

                    <div className="stat-card slider-score-card vibrant-card impact-side fade-zoom-in">
                        <div className="slider-score-content">
                            <h3> Impact Potential</h3>
                            <div className="slider-container">
                                <div className="slider-fill" style={{ background: PRIMARY, width: `${impact.potentialScore * 10}%` }}></div>
                                <div className="slider-thumb" style={{ background: SECONDARY, left: `${impact.potentialScore * 10}%` }}>{impact.potentialScore}/10</div>
                            </div>
                            <p className="slider-desc">{impact.explanation.substring(0, 75)}...</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="data-visuals-grid fade-slide-up">
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
                    <div>
                      <p>{feasibility.techDetails}</p>
                    </div>
                </div>

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

            <div className="deep-dive-section fade-slide-up">
                <div className="swot-grid fade-zoom-in">
                    <h2 className="swot-title">SWOT Analysis</h2>
                    <div className="swot-item strength swot-dynamic"><h4>Strength 🟢</h4><p>{swot.strength}</p></div>
                    <div className="swot-item weakness swot-dynamic"><h4>Weakness 🔴</h4><p>{swot.weakness}</p></div>
                    <div className="swot-item opportunity swot-dynamic"><h4>Opportunity 🟡</h4><p>{swot.opportunity}</p></div>
                    <div className="swot-item threat swot-dynamic"><h4>Threat 🟣</h4><p>{swot.threat}</p></div>
                </div>

                <div className="ai-feedback-section vibrant-card elevated-card fade-zoom-in">
                    <h2> AI Feedback Summary</h2>
                    <p>{aiFeedback}</p>
                </div>
            </div>

            <div className="financial-section fade-slide-up">
                <div className="plan-card monetization-card elevated-card fade-zoom-in">
                    <h3>Monetization Plan Generator</h3>
                    <ul>
                        {monetization.plan.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    <p><strong>Suggested Pricing Model:</strong> {monetization.suggestedPricing}</p>
                </div>

                <div className="plan-card funding-card elevated-card fade-zoom-in">
                    <h3>Funding & Cost Estimator</h3>
                    <p>{funding.paragraph}</p>
                    <p className="estimated-cost-tag">Estimated MVP Cost: <strong>{funding.estimatedCost}</strong></p>
                </div>
            </div>
            <div className="go-home-container">
  <button onClick={handleGoHome} className="go-home-btn">
    🏠 Go Back Home
  </button>
</div>

        </div>
    );
}

export default AnalysisReport;
