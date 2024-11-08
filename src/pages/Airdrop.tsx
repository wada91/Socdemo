// Airdrop.tsx
import React from 'react';
import './Airdrop.css';
import Awright from './icons/Awright';

const Earn: React.FC = () => {
  return (
    <div className="airdrop-page">
      {/* Top Icon */}
      <div className="airdrop-icon-container">
        
      </div>
      
      

      {/* Title */}
      <h1 className="airdrop-title">Airdrop
      <p className='copy-text'>Conect your wallet to get the Airdrop
        
        </p>
      </h1>
     

      {/* SocialCoin Youtube Section */}
      <section className="airdrop-section">
        
        
        {/* Task Card */}
        <div className="task-card">
          <div className="task-card-bg"></div> {/* Background layer for blur effect */}
          <div className="task-icon wallet-icon" />
          <div className="task-content">
            <p className="task-title">Telegram wallet</p>
            <p className="task-reward">
              Connect your Wallet to get your airdrop
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
