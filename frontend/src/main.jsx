import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Dashboard from "../../dashboard/src/components/Home.jsx"; // Correct path for Home.jsx inside dashboard


import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/signup/login.jsx'
import Logout from './landing_page/signup/Logout.jsx';
import AboutPage from './landing_page/about/AboutPage.jsx';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import NotFound from './landing_page/NotFound.jsx';

//Import Dashboard correctly (relative path issue fix)


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* Set HomePage as default route */}
      <Route path="/" element={<HomePage />} />

      {/* Signup Route */}
      <Route path="/signup" element={<Signup />} />
      <Route path='/login' element={<Login/>}/>
      <Route path="/logout" element= {<Logout/>}/>

      {/* Dashboard Route */}
      {/* <Route path="/dashboard/" element={<Dashboard />} /> */}


      {/* Other Routes */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />

      {/* 404 Not Found Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
