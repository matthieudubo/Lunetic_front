import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Catalogue from './components/Catalogue';
import Concept from './components/Concept';
import Contact from './components/Contact';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Montures from './components/Montures';
import Navbar from './components/Navbar';
import Nous from './components/Nous';
import OpticianProfile from './components/OpticianProfile';
import Sidebar from './components/Sidebar';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/montures" element={<Montures />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/opticians" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/us" element={<Nous />} />
          <Route path="/find-us" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/optician-profile" element={<OpticianProfile />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
