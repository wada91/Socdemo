// Earn.tsx
import React from 'react';
import './Earn.css';
import Coin from './icons/Coin';
import Awright from './icons/Awright';

const Earn: React.FC = () => {
  return (
    <div className="earn-page">
      {/* Top Icon */}
      <div className="earn-icon-container">
        <Coin size={128} /> {/* Replace with correct icon path */}
      </div>

      {/* Title */}
      <h1 className="earn-title">Earn</h1>

      {/* SocialCoin Youtube Section */}
      <section className="earn-section">
        <h2 className="section-title">SocialCoin Youtube</h2>
        
        {/* Task Card */}
        <div className="task-card">
          <div className="task-card-bg"></div> {/* Background layer for blur effect */}
          <div className="task-icon youtube-icon" />
          <div className="task-content">
            <p className="task-title">Video title</p>
            <p className="task-reward">
              <span className="coin-icon"></span> +100 
            </p>
            
          </div>
          <div className="aw-icon">
          <Awright size={32} /> 
          </div>
        </div>
        
        <div className="task-card">
          <div className="task-card-bg"></div> {/* Background layer for blur effect */}
          <div className="task-icon youtube-icon" />
          <div className="task-content">
            <p className="task-title">Video title</p>
            <p className="task-reward">
              <span className="coin-icon"></span> +100
            </p>
          </div>
          <div className="aw-icon">
          <Awright size={32} /> 
          </div>
        </div>
      </section>

      {/* SocialCoin Community Section */}
      <section className="earn-section">
        <h2 className="section-title">SocialCoin Community</h2>
        
        <div className="task-card">
          <div className="task-card-bg"></div> {/* Background layer for blur effect */}
          <div className="task-icon telegram-icon" />
          <div className="task-content">
            <p className="task-title">Join our Telegram Channel!</p>
            <p className="task-reward">
              <span className="coin-icon"></span> +100
            </p>
          </div>
          <div className="aw-icon">
          <Awright size={32} /> 
          </div>
        </div>
        
        <div className="task-card">
          <div className="task-card-bg"></div> {/* Background layer for blur effect */}
          <div className="task-icon twitter-icon" />
          <div className="task-content">
            <p className="task-title">Subscribe on X!</p>
            <p className="task-reward">
              <span className="coin-icon"></span> +100
            </p>
          </div>
          <div className="aw-icon">
          <Awright size={32} /> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Earn;
