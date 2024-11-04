// Navbar.tsx
import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import Home from './icons/Home';
import Coin from './icons/Coin';
import Bet from './icons/Bet';
import Friend from './icons/Friend';
import Airdrop from './icons/Airdrop';

const Navbar: React.FC = () => {
  return (
    <div className="fixed-bottom-container">
      <div className="flex flex-row items-center justify-between w-11/12"> {/* 80% width, centered */}
        
        <NavLink
          to="/" 
          end
          className={({ isActive }) =>
            `flex flex-col items-center px-2 sm:px-4 md:px-5 ${isActive ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`
          }
        >
          <Home size={32} />
          <p className="text-xs mt-1">Start</p>
        </NavLink>
        
        <div className="border-l border-gray-500 h-[54px] mx-2 sm:mx-3 md:mx-4"></div>

        <NavLink
          to="/earn"
          className={({ isActive }) =>
            `relative flex flex-col items-center px-2 sm:px-4 md:px-5 ${isActive ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`
          }
        >
          <Coin size={32} />
          <span className="absolute top-[-2px] right-[-2px] bg-blue-500 text-xs rounded-full w-5 h-5 flex items-center justify-center text-[#ffffff]">2</span>
          <p className="text-xs mt-1">Earn</p>
        </NavLink>

        <div className="border-l border-gray-500 h-[54px] mx-2 sm:mx-3 md:mx-4"></div>

        <NavLink
          to="/bet"
          className={({ isActive }) =>
            `flex flex-col items-center px-2 sm:px-4 md:px-5 ${isActive ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`
          }
        >
          <Bet size={32} />
          <p className="text-xs mt-1">Bet</p>
        </NavLink>

        <div className="border-l border-gray-500 h-[54px] mx-2 sm:mx-3 md:mx-4"></div>

        <NavLink
          to="/friends"
          className={({ isActive }) =>
            `flex flex-col items-center px-2 sm:px-4 md:px-5 ${isActive ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`
          }
        >
          <Friend size={32} />
          <p className="text-xs mt-1">Friends</p>
        </NavLink>

        <div className="border-l border-gray-500 h-[54px] mx-2 sm:mx-3 md:mx-4"></div>

        <NavLink
          to="/airdrop"
          className={({ isActive }) =>
            `flex flex-col items-center px-2 sm:px-4 md:px-5 ${isActive ? 'text-[#ffffff]' : 'text-[#b0b0b0]'}`
          }
        >
          <Airdrop size={32} />
          <p className="text-xs mt-1">Airdrop</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;
