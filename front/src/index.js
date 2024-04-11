import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
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

reportWebVitals();
