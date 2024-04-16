import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { DataProvider } from "./DataProvider/DataProvider.jsx";
import { MainComp } from "./MainComp/MainComp.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorComp } from "./MainComp/ErrorComp/ErrorComp.jsx";
import { SelectPage } from "./MainComp/SelectPage/SelectPage.jsx";

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
