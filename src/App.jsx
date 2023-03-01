import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Chat from './pages/Chat';
import Contact from './pages/Contact';
import Home from './pages/Home';
import RandomPaint from './pages/RandomPaint';
import SinglePaint from './pages/SinglePaint';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/singlepaint" element={<SinglePaint/>} />
        <Route path="/randompaint" element={<RandomPaint/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
