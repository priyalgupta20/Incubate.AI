import React from 'react';
import './AnalysisReport.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Dark mode friendly colors
const COLORS = ["#4FD1C5", "#63B3ED", "#F6AD55", "#FC8181"]; // teal, blue, orange, red
const PRIMARY = "#63B3ED";
const SECONDARY = "#4FD1C5";

// Animation duration
const ANIM_TIME = 1400;

// Example datasets
const marketData = [
  { year: 2020, value: 3 },
  { year: 2021, value: 3.8 },
  { year: 2022, value: 4.5 },
  { year: 2023, value: 5 },
  { year: 2024, value: 5.7 },
];

const competitionData = [
  { name: 'Eventbrite', score: 80 },
  { name: 'Peerspace', score: 70 },
  { name: 'Splacer', score: 60 },
  { name: 'VenueBook', score: 50 },
];

const audienceData = [
  { name: 'Event Organizers', value: 50 },
  { name: 'Individuals', value: 35 },
  { name: 'Corporate Teams', value: 15 },
];

const mockData = {
    title: "AI-Powered Event Space Rental Platform",
    category: "PropTech / B2B SaaS",
    overallRating: 82,
    innovationScore: 9,
    feasibility: {
        technical: "High",
        operational: "Medium",
        financial: "High",
        techDetails: "Requires advanced booking API and secure payment gateway.",
        timeline: "6-9 months MVP"
    },
    market: {
        sizeExplanation: "The addressable market is large ($5B+ in major US cities) and currently growing at 10% annually, but is highly fragmented.",
    },
    competition: {
        top5: ["Eventbrite", "Peerspace", "Splacer", "VenueBook", "Local Agents"],
        explanation: "Niche is to focus on unique, non-traditional venues (e.g., rooftops, warehouses).",
    },
    audience: {
        biggestTarget: "Event Organizers & Individuals",
    },
    swot: {
        strength: "Strong local partnership model; low capital expenditure initially.",
        weakness: "High dependence on venue owner buy-in; intense initial sales effort required.",
        opportunity: "Expand into adjacent services (catering, equipment rental); geographical expansion.",
        threat: "Existing large platforms adding niche venue listings; local regulatory changes.",
    },
    aiFeedback: "Focus initial marketing efforts heavily on social media platforms targeting local event coordinators. Explore a tiered subscription model for venues offering premium analytics. Partner with 3-5 key local venues initially to build high-quality case studies and trust.",
    impact: {
        potentialScore: 8.5,
        explanation: "High long-term value due to network effects and high scalability across major global urban areas. Social impact through maximizing underutilized urban spaces.",
    },
    monetization: {
        plan: [
            "Subscription (SaaS) for Venue Owners (Premium analytics & priority listing).",
            "Transaction Fees (5-10% of booking value paid by the renter).",
            "Featured Listings (One-time fee for top placements in search results)."
        ],
        suggestedPricing: "Venue SaaS: $49/month. Transaction Fee: 7%.",
    },
    funding: {
        estimatedCost: "$150,000 - $250,000",
        paragraph: "Recommended funding stage is Seed or Pre-Seed. Funds should primarily cover 6-9 months of development team salaries and initial local market acquisition efforts."
    }
};

const AnalysisReport = () => {
    const { 
        title, category, overallRating, innovationScore, feasibility, 
        market, competition, audience, swot, aiFeedback, impact, 
        monetization, funding 
    } = mockData;

    return (
        <div className="report-page-container dark-theme fade-in">
            <div className="report-header fade-slide-down">
                <h1>{title}</h1>
                <p className="report-subtitle">Get an instant, in-depth analysis of your business idea.</p>

                <span className="header-category-tag">{category}</span>

                <div className="pitch-summary pulse-on-hover">
                    <p className="pitch-text">"The Airbnb for private event spaces, specializing in non-traditional, unique venues for B2B and consumer renters."</p>
                </div>

                <div className="core-stats-wrapper">
                    <div className="stat-card slider-score-card vibrant-card innovation-side fade-zoom-in">
                        <div className="slider-score-content">
                            <h3>1. Innovation Score</h3>
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
                        <p className="rating-desc">Strong potential and market fit</p>
                    </div>

                    <div className="stat-card slider-score-card vibrant-card impact-side fade-zoom-in">
                        <div className="slider-score-content">
                            <h3>8. Impact Potential</h3>
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
                        <Bar dataKey="value" fill={PRIMARY} animationDuration={ANIM_TIME} />
                    </BarChart>
                </div>

                <div className="visual-card market-card elevated-card fade-zoom-in">
                    <h3>Market Size Estimate</h3>
                    <LineChart width={330} height={200} data={marketData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                        <XAxis dataKey="year" stroke="#CBD5E0" />
                        <YAxis stroke="#CBD5E0" />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke={SECONDARY} strokeWidth={3} animationDuration={ANIM_TIME} />
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
                        <Bar dataKey="score" fill={COLORS[0]} animationDuration={ANIM_TIME} />
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
                    <p className="explanation-line">Pain Points: Finding unique venues, booking difficulties.</p>
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
                    <h2>AI Feedback Summary</h2>
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
        </div>
    );
}

export default AnalysisReport;