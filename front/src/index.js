import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HeaderFooter } from './MainComp/HeaderFooter.jsx';
import reportWebVitals from './reportWebVitals';
import { FirstGraph } from './Graphs/FirstGraph/FirstGraph.jsx';
import { Welcome } from './Welcome/Welcome.jsx';
import { MainDiv } from './MainComp/MainDiv/MainDIv.jsx';
import { DataProvider } from './DataProvider/DataProvider.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<DataProvider>
<HeaderFooter/>
<MainDiv></MainDiv>
</DataProvider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
