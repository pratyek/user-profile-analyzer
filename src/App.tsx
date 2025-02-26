// import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Page Components
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/members/:subpage" element={<MembersPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/research/:subpage" element={<ResearchPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/publications/:subpage" element={<PublicationsPage />} />
            {/* <Route path="/facility" element={<FacilityPage />} />
            <Route path="/facility/:subpage" element={<FacilityPage />} />
            <Route path="/lecture" element={<LecturePage />} />
            <Route path="/lecture/:subpage" element={<LecturePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact/:subpage" element={<ContactPage />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
