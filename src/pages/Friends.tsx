// Friends.tsx
import React from 'react';
import './Friends.css';
import Friends from './icons/Friends';
import Awright from './icons/Awright';
import Copy from './icons/Copy';

const Earn: React.FC = () => {
  return (
    <div className="friends-page">
      {/* Top Icon */}
      <div className="friends-icon-container">
        <Friends size={128} /> {/* Replace with correct icon path */}
      </div>
      
      

      {/* Title */}
      <h1 className="friends-title">Invite friends
      <p className='copy-text'>invite your friends and becaomde you and your friends profit
        
        </p>
      </h1>
     

      {/* SocialCoin Youtube Section */}
      <section className="friends-section">
        <h2 className="section-title">List of your friends (2)</h2>
        
        {/* Task Card */}
        <div className="task-card">
          <div className="task-card-bg"></div> {/* Background layer for blur effect */}
          <div className="task-icon profile-icon" />
          <div className="task-content">
            <p className="task-title">Muster Mann</p>
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
          <div className="task-icon profile-icon" />
          <div className="task-content">
            <p className="task-title">Muster Mann2</p>
            <p className="task-reward">
              <span className="coin-icon"></span> +100
            </p>
          </div>
          <div className="aw-icon">
          <Awright size={32} /> 
          </div>
        </div>
      </section>

      {/* Invite Button */}
      <div className='invite-bs'>
      

      <button className="invite-button" >
        <span>Invite a friend</span>
      </button>
      <button className="copy-button" >
      <div className="copy-icon">
          <Copy size={32} /> 
          </div>
      </button>

      </div>
     
    </div>
  );
};

export default Earn;
