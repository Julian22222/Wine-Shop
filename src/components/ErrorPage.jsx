import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>ErrorPage</h1>
      <h2> This page does not exist. </h2>
      <Link to="/Wine-Shop" className="errorPage-link">
        Go back to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
