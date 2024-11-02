import { IconProps } from "../utils/types";


const Telegram: React.FC<IconProps> = ({ size = 32, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        //<svg fill="currentColor" className={className} height={svgSize} width={svgSize} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"></path></g></svg>
        <svg fill="currentColor" className={className} height={svgSize} width={svgSize} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="8" fill="#333333"/>
<path d="M24.9219 8C24.8526 8 24.7811 8.0126 24.71 8.03965L6.38087 15.0044C5.86287 15.2008 5.87658 15.9381 6.40162 16.1156L10.6512 17.5514L13.2137 22.6806L13.2156 22.6846L13.2226 22.698L13.2245 22.6976C13.2708 22.7921 13.3675 22.8532 13.4709 22.8532C13.5313 22.8532 13.5935 22.8328 13.6472 22.7873L16.0479 20.7516L13.3671 18.7174L13.5772 21.3889L11.6501 17.3995L21.8918 11.2476L13.3671 18.7174L20.0036 23.7536C20.2255 23.9218 20.4804 24 20.7302 24C21.2567 24 21.7625 23.6543 21.9051 23.0841L25.4925 8.73475C25.59 8.3457 25.2861 8 24.9219 8Z" fill="white"/>
</svg>
    );
};

export default Telegram;