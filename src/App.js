import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <>
      {/* Global Styles to Hide Scrollbar */}
      <style>
        {`
          /* Hide scrollbar for WebKit browsers */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for Firefox */
          body {
            scrollbar-width: none; 
          }

          /* Hide scrollbar for Internet Explorer */
          body {
            -ms-overflow-style: none;
          }

          /* Ensure body occupies full height */
          html, body {
            height: 100%;
            margin: 0;
          }
        `}
      </style>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
