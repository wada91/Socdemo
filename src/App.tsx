import { useState } from 'react';
import './index.css';
import './App.css';
import Soclogo from './icons/Soclogo';
import Telegram from './icons/Telegram';
import Xcom from './icons/Xcom';
import Youtube from './icons/Youtube';

function App() {
  // State to control the flyout visibility
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

  // Function to toggle the flyout
  const toggleFlyout = () => {
    setIsFlyoutVisible(!isFlyoutVisible);
  };

  // Function to close flyout when clicking the background overlay
  const closeFlyout = () => {
    setIsFlyoutVisible(false);
  };

  return (
    <div className="bg-[#121212] flex justify-center items-center h-screen relative">
      <div className="w-full text-white flex flex-col max-w-xl items-center justify-center">
        <div className="px-32 flex flex-col items-center" style={{ gap: '64px' }}>
          <div className="p-1 rounded-lg">
            <Soclogo size={284} />
          </div>
          <div className="flex flex-col" style={{ gap: '16px' }}>
            <div className="text-[#ffffff] font-bold" style={{ fontSize: '26px', lineHeight: '36px' }}>
              <p className="text-center">Coming Soon...</p>
            </div>
            <div className="text-[#ffffff]" style={{ fontSize: '16px', lineHeight: '20px', marginBottom: '16px', }}>
              <p className="text-center">Join early and claim your spot in the exclusive airdrop!</p>
            </div>
            <button
              onClick={toggleFlyout}
              className="stay-updated-btn"
              style={{
                borderRadius: '4px',
                background: 'linear-gradient(0deg, #D5D5D5 5%, #FFF 25%)',
                display: 'flex',
                width: '284px',
                padding: '12px 24px',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '16px',
                lineHeight: '22px',
                color: '#1c1c1c',
                textAlign: 'center',
                fontWeight: '600',
              }}
            >
              Stay Updated
            </button>
          </div>
        </div>
      </div>

      {/* Dark overlay when flyout is visible */}
      {isFlyoutVisible && (
        <div>
          {/* Background overlay with onClick to close flyout */}
          <div className="fixed inset-0 bg-black bg-opacity-40 z-10" onClick={closeFlyout}></div>

          {/* Flyout from Bottom */}
          <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white rounded-t-xl shadow-lg p-6 transition-all duration-500 ease-in-out z-20">
            <div className="relative" style={{ marginBottom: '48px', }}>
              <h2
                style={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  color: '#ffffff',
                  textAlign: 'center',
                  fontWeight: '700',
                  // Adding 64px margin below the h2
                }}
                className="absolute left-0 right-0 flex justify-center"
              >
                Stay Updated
              </h2>
              <button
                onClick={toggleFlyout}
                className="text-white text-3xl absolute right-0"
                style={{ top: '-10px' }}
              >
                &times;
              </button>
            </div>
            <div className="mt-4">
              <p className=" text-lg" style={{
                fontSize: '20px',
                lineHeight: '26px',
                alignSelf: 'stretch',
                fontWeight: '700'
              }}>Follow Official Channels</p>
              <ul className="space-y-4 mt-4">
                <li className="flex items-center space-x-2">
                  <a
                    href="https://t.me/your-telegram-channel" // Replace this with your actual Telegram link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Telegram size={32} />
                    <span
                      style={{
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: '400',
                      }}
                    >
                      SocialCoin Community
                    </span>
                  </a>
                </li>

                <li className="flex items-center space-x-2">
                  <a
                    href="https://t.me/your-telegram-channel" // Replace this with your actual Telegram link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Xcom size={32} />
                    <span style={{
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontWeight: '400'
                    }}>SocialCoin on X.COM</span>
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <a
                    href="https://t.me/your-telegram-channel" // Replace this with your actual Telegram link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Youtube size={32} />
                    <span style={{
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontWeight: '400'
                    }}>SocialCoin Youtube Channel</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
