import React, { useState } from 'react';
import Information from './icons/Information';
import Clock from './icons/Clock';
import Correct from './icons/Correct';
import './Bet.css';

const Bet: React.FC = () => {
  const [isResultsView, setIsResultsView] = useState(false);

 

  return (
    <div className="bet-page">
      {/* Switch Button */}
      <div className="switch-container"><div className='switch-container-bg'></div>
        <button
          className={`switch-button ${!isResultsView ? 'active' : ''}`}
          onClick={() => setIsResultsView(false)}
        >
          New bet
        </button>
        <button
          className={`switch-button ${isResultsView ? 'active' : ''}`}
          onClick={() => setIsResultsView(true)}
        >
          Results
        </button>
      </div>

      {/* Content */}
      <div className="bet-cards">
        {!isResultsView ? (
          // New Bet View
          <div className="new-bet-page"><div className='bet-card'><div className='bet-card-bg'></div>
            <div className="bet-card-header"><div className='countdown'><Clock size={16} />
              <span>Ends in: 12:32:25</span></div>
              <span className="info-icon"><Information size={16} /> </span>
            </div>
            <div className='divider'></div>
            <p className="bet-date">13.10.2024</p>
            <p className="bet-title">Bitcoin price will be:</p>
            <div className="bet-options">
              <label>
                <input type="radio" name="bet" /><p className='choise'>
                Higher<div className='divider-choise' /></p>
              </label>
              <label>
                <input type="radio" name="bet" />
                <p className='choise'>
                Lower<div className='divider-choise' /></p>
              </label>
            </div>
            <div className='bet-current-con'>
            <div className="bet-current">Current bet: <strong><span className='underline'>100</span> </strong><div className='coin-img' /></div>
            </div>
            </div>
            <div className='bet-card'><div className='bet-card-bg'></div>
            <div className="bet-card-header">
              <span>Results in: 12:32:25</span>
              <span className="info-icon"><Information size={16} /></span>
            </div><div className='divider'></div>
            <p className="bet-date">13.10.2024</p>
            <p className="bet-title">Bitcoin price will be:</p>
            <div className="result-options">
              <div className="result-option">
                <div className='procent'><span>55%</span> <Correct size={16} />   </div>
                <div className='result-style'>
                <span className="result-label">Higher</span>
                <div className="result-bar">
                  <div className="result-bar-fill" style={{ width: '55%' }}></div></div>
                </div>
              </div>
              <div className="result-option">
                <span>45%</span>
                <div className='result-style'>
                <span className="result-label">Lower</span>
                <div className="result-bar">
                  <div className="result-bar-fill" style={{ width: '45%' }}></div></div>
                </div>
              </div>
            </div>
            <div className="bet-current">You bet: <strong>100 </strong><div className='coin-img' /></div>
            </div>


          </div>
          
          


        ) : (
          // Results View
          <div className="result-card"><div className='bet-card-bg'></div>
            <div className="bet-card-header">
              <span>Results in: 12:32:25</span>
              <span className="info-icon"><Information size={16} /></span>
            </div>
            <p className="bet-date">13.10.2024</p>
            <p className="bet-title">Bitcoin price will be:</p>
            <div className="result-options">
              <div className="result-option">
                <span>55%</span>
                <span className="result-label">Higher</span>
                <div className="result-bar">
                  <div className="result-bar-fill" style={{ width: '55%' }}></div>
                </div>
              </div>
              <div className="result-option">
                <span>45%</span>
                <span className="result-label">Lower</span>
                <div className="result-bar">
                  <div className="result-bar-fill" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
            <div className="bet-current">You bet: <strong>100 </strong><div className='coin-img' /></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bet;
