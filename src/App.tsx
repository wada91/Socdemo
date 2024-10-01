import './index.css';
import './App.css';
import Soclogo from './icons/Soclogo';
import Telegram from './icons/Telegram';
import Xcom from './icons/Xcom';
import Youtube from './icons/Youtube';

function App() {




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
              <p className="text-center">Join early to claim your spot in the exclusive airdrop!</p><p className="text-center">Stay updated by following the official SocialCoin channels</p>
            </div>


            <div className="flex justify-center items-center ">
              <ul className="flex space-x-6 items-center">
                <li className="flex items-center">
                  <a
                    href="https://t.me/your-telegram-channel" // Replace this with your actual Telegram link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Telegram size={64} />
                  </a>
                </li>

                <li className="flex items-center">
                  <a
                    href="https://t.me/your-telegram-channel" // Replace this with your actual Telegram link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Xcom size={64} />
                  </a>
                </li>

                <li className="flex items-center">
                  <a
                    href="https://t.me/your-telegram-channel" // Replace this with your actual Telegram link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Youtube size={64} />
                  </a>
                </li>
              </ul>
            </div>



          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
