// StartPage.tsx
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Awright from './icons/Awright';
import Close from './icons/Close';
import './StartPage.css';

const data = [
  { name: 'D 1', balance: 10 },
  { name: 'D 2', balance: 15 },
  { name: 'D 3', balance: 20 },
  { name: 'D 4', balance: 25 },
  { name: 'D 5', balance: 35 },
  { name: 'D 6', balance: 30 },
  { name: 'D 7', balance: 40 },
];

const StartPage: React.FC = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [spendValue, setSpendValue] = useState(50);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpendValue(Number(event.target.value));
    updateSliderBackground(event.target);
  };

  const updateSliderBackground = (slider: HTMLInputElement) => {
    const value = (Number(slider.value) - Number(slider.min)) / (Number(slider.max) - Number(slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, white ${value}%, #666 ${value}%)`;
  };
  return (
    <div className="text-white w-full flex flex-col pr-[16px] pl-[16px] items-center min-h-screen py-6">
      
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-section-bg"></div>
        <div className="profile-content">
          <div className="flex items-center space-x-3">
            <div className="profile-icon"></div>
            <p className="profile-name">Wada as</p>
          </div>
          <div className="text-white">
            <Awright size={32} />
          </div>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="flex justify-around w-11/12 max-w-md mb-8">
        {['Daily rewards', 'Daily rewards', 'Youtube Video'].map((text, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="reward-icon-border">
              <div className="reward-icon-inner">
                <div className="reward-image"></div>
              </div>
            </div>
            <p className="reward-label">{text}</p>
          </div>
        ))}
      </div>

      {/* Balance Section */}
      <div className="flex items-center space-x-2 mb-8">
        <div className="balance-icon"></div>
        <p className="text-4xl font-bold">125,64</p>
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tick={{ fill: '#e0e0e0' }} />
            <YAxis tick={{ fill: '#e0e0e0' }} />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#4ade80" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Boost Button */}
      <button className="boost-button" onClick={toggleOverlay}>
        <span className="text-yellow-500">&#9889;</span>
        <span>Boost</span>
      </button>

      {/* Overlay */}
      {isOverlayVisible && (
        <div className="overlay" onClick={toggleOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="overlay-close" onClick={toggleOverlay}><Close size={32} /></button>
            <div className="overlay-icon">&#9889;</div>
            <h2>Boost your profit</h2>
            <p>Spend SocialCoin points to activate a 24-hour boost and earn points every hour, even while offline. The more you invest, the more you earn!</p>
            <div className="profit-info">
              <p>Profit per hour: <span>+10 <span className="coin-icon"></span></span></p>
              <p>Total profit: <span>+100 <span className="coin-icon"></span></span></p>
            </div>
            <div className="spend-input">
              <div className="spend-label">You spend</div>
              <div className="spend-value">{spendValue} <span className="coin-icon"></span></div>
            </div>
            <div className="slider-container">
            <input
                type="range"
                min="0"
                max="100"
                value={spendValue}
                onChange={handleSliderChange}
                className="slider"
                style={{ background: `linear-gradient(to right, white ${spendValue}%, #666 ${spendValue}%)` }}
              />
            </div>
            <button className="overlay-boost-button">
              <span className="text-yellow-500">&#9889;</span>
              <span>Boost</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartPage;
