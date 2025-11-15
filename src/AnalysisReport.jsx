import React from 'react';
import './AnalysisReport.css';

// Placeholder content for demonstration
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
        graphPlaceholder: "📈 Line Graph: Market Growth Trend", 
    },
    competition: {
        top5: ["Eventbrite", "Peerspace", "Splacer", "VenueBook", "Local Agents"],
        explanation: "Niche is to focus on unique, non-traditional venues (e.g., rooftops, warehouses).",
        graphPlaceholder: "📊 Bar Graph: Competitive Feature Overlap", 
    },
    audience: {
        biggestTarget: "Event Organizers & Individuals",
        pieChartPlaceholder: "🥧 Pie Chart: Audience Segmentation", 
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
            <div className="report-header">
                <h1>{title}</h1>
                <p className="report-subtitle">Get an instant, in-depth analysis of your business idea.</p>
                
                <span className="header-category-tag">{category}</span>

                {/* --- NEW PITCH PLACEMENT (AT TOP) --- */}
                <div className="pitch-summary pulse-on-hover">
                    <p className="pitch-text">"The Airbnb for private event spaces, specializing in non-traditional, unique venues for B2B and consumer renters."</p>
                </div>

                {/* --- CORE STATS GRID (Scores) --- */}
                <div className="core-stats-wrapper">
                    
                    {/* 1. Innovation Score (Slider Card) */}
                    <div className="stat-card slider-score-card vibrant-card innovation-side">
                        <div className="slider-score-content">
                            <h3>1. Innovation Score</h3>
                            <div className="slider-container">
                                <div className="slider-fill" style={{ width: `${innovationScore * 10}%` }}></div>
                                <div className="slider-thumb" style={{ left: `${innovationScore * 10}%` }}>{innovationScore}/10</div>
                            </div>
                            <p className="slider-desc">How unique and original the idea is vs. existing solutions.</p>
                        </div>
                    </div>

                    {/* 10. Overall Rating (Central Score) */}
                    <div className="overall-rating-center">
                        <div className="center-rating-circle">
                            <span className="rating-value">{overallRating}</span>
                            <span className="rating-max">/100</span>
                        </div>
                        <p className="rating-label">Overall Rating</p>
                        <p className="rating-desc">Strong potential and market fit</p>
                    </div>

                    {/* 8. Impact Potential (Slider Card) */}
                    <div className="stat-card slider-score-card vibrant-card impact-side">
                        <div className="slider-score-content">
                            <h3>8. Impact Potential</h3>
                            <div className="slider-container">
                                <div className="slider-fill" style={{ width: `${impact.potentialScore * 10}%` }}></div> 
                                <div className="slider-thumb" style={{ left: `${impact.potentialScore * 10}%` }}>{impact.potentialScore}/10</div>
                            </div>
                            <p className="slider-desc">{impact.explanation.substring(0, 75)}...</p> 
                        </div>
                    </div>
                </div>
            </div>

            {/* --- DATA VISUALIZATION SECTION --- */}
            <div className="data-visuals-grid">
                
                {/* 2. Feasibility Analysis (Bar Graph) */}
                <div className="visual-card feasibility-card elevated-card">
                    <h3>Feasibility Analysis</h3>
                    <div className="chart-placeholder bar-chart data-animation">
                        <p>{feasibility.technical} Tech | {feasibility.operational} Op | {feasibility.financial} Fin</p>
                    </div>
                    <div className="feasibility-lines">
                        <p><strong>Technical:</strong> {feasibility.techDetails}</p>
                        <p><strong>Operational:</strong> Requires secure venue owner vetting process.</p>
                        <p><strong>Financial:</strong> High profitability potential post-MVP.</p>
                        <p className="small-text">Timeline: {feasibility.timeline}</p>
                    </div>
                </div>
                
                {/* 3. Market Size (Line Graph) */}
                <div className="visual-card market-card elevated-card">
                    <h3>Market Size Estimate</h3>
                    <div className="chart-placeholder line-graph data-animation">
                        {market.graphPlaceholder}
                    </div>
                    <p className="explanation-line">{market.sizeExplanation}</p>
                </div>

                {/* 4. Competition Analysis (Bar Graph) */}
                <div className="visual-card competition-card elevated-card">
                    <h3>Competition Analysis</h3>
                    <div className="chart-placeholder bar-chart data-animation">
                        {competition.graphPlaceholder}
                    </div>
                    <p><strong>Top Competitors:</strong> {competition.top5.join(', ')}</p>
                    <p className="explanation-line">{competition.explanation}</p>
                </div>

                {/* 7. Target Audience (Pie Chart) */}
                <div className="visual-card audience-card elevated-card">
                    <h3>Target Audience Profile</h3>
                    <div className="chart-placeholder pie-chart data-animation">
                        {audience.pieChartPlaceholder}
                    </div>
                    <p className="target-name">Biggest Target: <strong>{audience.biggestTarget}</strong></p>
                    <p className="explanation-line">Pain Points: Finding unique venues, booking difficulties.</p>
                </div>

            </div>

            {/* --- DEEP DIVE & ACTION PLAN SECTION --- */}
            <div className="deep-dive-section">
                
                {/* 5. SWOT Report (Fixed 2x2 Grid) */}
                <div className="swot-grid">
                    <h2 className="swot-title">SWOT Analysis</h2>
                    
                    {/* Dynamic SWOT Items */}
                    <div className="swot-item strength swot-dynamic">
                        <h4>Strength 🟢</h4>
                        <p>{swot.strength}</p>
                    </div>
                    <div className="swot-item weakness swot-dynamic">
                        <h4>Weakness 🔴</h4>
                        <p>{swot.weakness}</p>
                    </div>
                    <div className="swot-item opportunity swot-dynamic">
                        <h4>Opportunity 🟡</h4>
                        <p>{swot.opportunity}</p>
                    </div>
                    <div className="swot-item threat swot-dynamic">
                        <h4>Threat 🟣</h4>
                        <p>{swot.threat}</p>
                    </div>
                </div>

                {/* 6. AI Feedback Summary (Text Para) */}
                <div className="ai-feedback-section vibrant-card elevated-card">
                    <h2>AI Feedback Summary</h2>
                    <p>{aiFeedback}</p>
                </div>
            </div>

            {/* --- FINANCIAL & ACTION PLAN SECTION --- */}
            <div className="financial-section">
                
                {/* 11. Monetization Plan (Text Bullet Points + Pricing) */}
                <div className="plan-card monetization-card elevated-card">
                    <h3>Monetization Plan Generator</h3>
                    <ul>
                        {monetization.plan.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p><strong>Suggested Pricing Model:</strong> {monetization.suggestedPricing}</p>
                </div>

                {/* 12. Funding & Cost Estimator (Text Para + Cost) */}
                <div className="plan-card funding-card elevated-card">
                    <h3>Funding & Cost Estimator</h3>
                    <p>{funding.paragraph}</p>
                    <p className="estimated-cost-tag">Estimated MVP Cost: <strong>{funding.estimatedCost}</strong></p>
                </div>
            </div>
        </div>
    );
}

export default AnalysisReport;