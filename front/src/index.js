import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { DataProvider } from "./data/DataProvider.jsx";
import { MainComp } from "./HomePage/MainComp.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorComp } from "./ErrorPage/ErrorComp.jsx";
import { SelectPage } from "./SelectPage/SelectPage.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" Component={SelectPage} />
          <Route path="/homepage" Component={MainComp} />
          <Route path="/404" Component={ErrorComp} />
        </Routes>
      </Router>
    </DataProvider>
  </React.StrictMode>
);

reportWebVitals();
