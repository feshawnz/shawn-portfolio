import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Main, ProjectPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/shawn-portfolio">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
        <BackToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;