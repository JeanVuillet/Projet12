import React from "react";
import "./ErrorComp.scss";
import { useData } from "../data/DataProvider";
import { Link } from "react-router-dom";

// Composant principal qui contient l'ErrorBoundary
export function ErrorComp() {
  let { errorMessage } = useData();
  return (
    <div className="container">
      <div className="error">Error 404</div>
      <div className="message"> Data not found or not selected</div>
      <div className="detail">{errorMessage}</div>
      <Link to="/" className="link">
        {" "}
        return to selectPage
      </Link>
    </div>
  );
}
