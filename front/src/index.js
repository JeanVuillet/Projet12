import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './MainComp/Header/Header.jsx';
import { SideBarre } from './MainComp/SideBarre/SideBarre.jsx';
import reportWebVitals from './reportWebVitals';
import { BarGraph } from './Graphs/BarGraph/BarGraph.jsx';
import { Welcome } from './MainComp/MainDiv/Welcome/Welcome.jsx';
import { MainDiv } from './MainComp/MainDiv/MainDIv.jsx';
import { DataProvider } from './DataProvider/DataProvider.jsx';
import { MainComp } from './MainComp/MainComp.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<DataProvider>
<MainComp/>
</DataProvider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
