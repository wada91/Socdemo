// App.tsx
import React from 'react';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Start from './pages/Start';
import Earn from './pages/Earn';
import Bet from './pages/Bet';
import Friends from './pages/Friends';
import Airdrop from './pages/Airdrop';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-[#121212] flex flex-col justify-center items-center h-screen relative background">
        <div className="w-full text-white flex flex-col max-w-xl items-center justify-center flex-grow">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/earn" element={<Earn />} />
            <Route path="/bet" element={<Bet />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/airdrop" element={<Airdrop />} />
          </Routes>
        </div>
        
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
