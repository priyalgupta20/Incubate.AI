import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="spinner"></div>
      <p className="loading-text">Analyzing your idea...</p>
    </div>
  );
}

