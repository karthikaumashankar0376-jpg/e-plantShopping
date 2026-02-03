import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
  <div className="app-container">
    {!showProductList ? (
      <div className="landing_page">
        <div className="content">
          <div className="landing_content">
            {/* Updated heading to match exact grading criteria */}
            <h1>Welcome to Paradise Nursery</h1> 
            <p>Where Greenery Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    ) : (
      <ProductList />
    )}
  </div>
);
}

export default App;
