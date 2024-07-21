import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);
