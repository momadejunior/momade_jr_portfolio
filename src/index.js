import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // ✅ Import necessário
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer';
import Navbar from './components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <Navbar/>
            </div>
        </div>
      </div>
  
      <App />
      <Footer/>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
