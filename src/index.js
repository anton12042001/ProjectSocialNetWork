import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import SamuraiJSApp from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SamuraiJSApp/>
);
reportWebVitals();


