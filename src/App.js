import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Experiments from './pages/experiments';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import './scss/App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/contact" element={ <Contact /> } />
          <Route exact path="/experiments" element={ <Experiments />} />
          <Route exact path="/portfolio" element={ <Portfolio /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
