import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-page">

      <div className="text-center">

        <h1 className="error-code">
          404
        </h1>

        <h2 className="text-white fw-bold mb-3">
          Oops! Page Not Found
        </h2>

        <p className="error-message">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="btn submit-btn mt-4 px-5"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}