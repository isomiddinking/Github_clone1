// Star_psga.jsx
import React, { useState, useEffect } from 'react';
import './Star_psga.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StarsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [sortBy, setSortBy] = useState('Recently starred');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="stars-page-container">
      <h1 className="stars-page-title" data-aos="fade-down">Stars</h1>

      <div className="stars-page-filters" data-aos="fade-up">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search stars"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button>Search</button>
        </div>

        <div className="filter-options">
          <label htmlFor="type-select">Type:</label>
          <select id="type-select" value={filterType} onChange={handleTypeChange}>
            <option value="All">All</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>

          <label htmlFor="sort-select">Sort by:</label>
          <select id="sort-select" value={sortBy} onChange={handleSortByChange}>
            <option value="Recently starred">Recently starred</option>
            <option value="Least recently starred">Least recently starred</option>
            <option value="Name A-Z">Name A-Z</option>
            <option value="Name Z-A">Name Z-A</option>
          </select>
        </div>
      </div>

      <div className="no-stars-message" data-aos="fade-up" data-aos-delay="300">
        <span className="star-icon">★</span>
        <h2>You don't have any starred repositories yet.</h2>
        <p>
          As you <a href="https://github.com/explore" target="_blank" rel="noopener noreferrer">explore GitHub</a>, star repositories to save them for later and they'll show up here.
        </p>
      </div>
    </div>
  );
};

export default StarsPage;
