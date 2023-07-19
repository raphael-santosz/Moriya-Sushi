import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import { ComLogin } from './pages/Login/ComLogin';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> } />
            <Route path="/login" element={ <ComLogin /> } />
        </Routes>
    </BrowserRouter>
);

