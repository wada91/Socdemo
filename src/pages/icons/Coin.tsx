import { IconProps } from "../utils/types";


const Coin: React.FC<IconProps> = ({ size = 32, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        //<svg fill="currentColor" className={className} height={svgSize} width={svgSize} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" fill="currentColor"></path> </g></svg>
        <svg className={className} height={svgSize} width={svgSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.76037 26.4754C4.05708 27.1325 5.7643 27.5 7.57399 27.5C9.38426 27.5 11.0915 27.1406 12.3876 26.4754C13.8421 25.7324 14.6486 24.6922 14.6486 23.5352V15.996C14.6486 14.8464 13.8421 13.7987 12.3876 13.0557C11.0915 12.3986 9.38426 12.0311 7.57399 12.0311C5.7643 12.0311 4.05708 12.3905 2.76037 13.0557C1.30644 13.7987 0.5 14.8383 0.5 15.996V23.5352C0.5 24.6922 1.29829 25.7324 2.76037 26.4754ZM13.123 19.7656C13.123 20.9307 10.8388 22.2214 7.56642 22.2214C4.29407 22.2214 2.00982 20.9232 2.00982 19.7656V18.491C2.23109 18.6471 2.48379 18.7957 2.7528 18.9368C4.04893 19.5934 5.75614 19.9608 7.56642 19.9608C9.37611 19.9608 11.0833 19.6014 12.38 18.9368C12.6485 18.7957 12.9018 18.6471 13.123 18.491V19.7656ZM7.57399 25.9985C4.30164 25.9985 2.01739 24.7003 2.01739 23.5426V22.2681C2.23866 22.4247 2.49194 22.5733 2.76037 22.7139C4.05708 23.371 5.7643 23.7385 7.57399 23.7385C9.38426 23.7385 11.0915 23.3785 12.3876 22.7139C12.6566 22.5733 12.9093 22.4247 13.1306 22.2681V23.5426C13.123 24.7003 10.8463 25.9985 7.57399 25.9985ZM7.57399 13.5401C10.8463 13.5401 13.1306 14.8389 13.1306 15.996C13.1306 17.1536 10.8463 18.4518 7.57399 18.4518C4.30164 18.4518 2.01739 17.1536 2.01739 15.996C2.01739 14.8389 4.30164 13.5401 7.57399 13.5401Z" fill="#ffffff"/>
<path d="M19.6118 26.4754C20.9085 27.1325 22.6157 27.5 24.4254 27.5C26.2276 27.5 27.9429 27.1406 29.239 26.4754C30.6936 25.7324 31.5 24.6922 31.5 23.5352C31.5 23.5271 31.5 23.5271 31.5 23.5196C31.5 23.5115 31.5 23.5115 31.5 23.5041V8.46484C31.5 7.31525 30.6936 6.26702 29.239 5.52404C27.9429 4.86746 26.2357 4.5 24.4254 4.5C22.6233 4.5 20.9085 4.85939 19.6118 5.52404C18.1579 6.26702 17.3514 7.30718 17.3514 8.46484V23.5041C17.3514 23.5115 17.3514 23.5115 17.3514 23.5196C17.3514 23.5271 17.3514 23.5271 17.3514 23.5352C17.3514 24.6922 18.1579 25.7324 19.6118 26.4754ZM29.982 12.2344C29.982 13.3996 27.6978 14.6903 24.4254 14.6903C21.1531 14.6903 18.8688 13.3915 18.8688 12.2344V10.9599C19.0907 11.1159 19.3434 11.2645 19.6118 11.4056C20.9085 12.0622 22.6157 12.4297 24.4254 12.4297C26.2276 12.4297 27.9429 12.0703 29.239 11.4056C29.5081 11.2645 29.7608 11.1159 29.982 10.9599V12.2344ZM19.6118 15.1747C20.9085 15.8318 22.6157 16.1993 24.4254 16.1993C26.2276 16.1993 27.9429 15.8399 29.239 15.1747C29.5081 15.0341 29.7608 14.8855 29.982 14.7289V16.004C29.982 17.1692 27.6978 18.4593 24.4254 18.4593C21.1531 18.4593 18.8688 17.1611 18.8688 16.004V14.7289C19.0982 14.8855 19.3434 15.0341 19.6118 15.1747ZM19.6118 18.9368C20.9085 19.5934 22.6157 19.9608 24.4254 19.9608C26.2276 19.9608 27.9429 19.6014 29.239 18.9368C29.5081 18.7957 29.7608 18.6471 29.982 18.491V19.7656C29.982 20.9307 27.6978 22.2214 24.4254 22.2214C21.1531 22.2214 18.8688 20.9232 18.8688 19.7656V18.491C19.0982 18.6551 19.3434 18.8037 19.6118 18.9368ZM24.4254 25.9985C21.1531 25.9985 18.8688 24.7003 18.8688 23.5426C18.8688 23.5352 18.8688 23.5352 18.8688 23.5271C18.8688 23.5196 18.8688 23.5196 18.8688 23.5115V22.2681C19.0907 22.4247 19.3434 22.5733 19.6118 22.7139C20.9085 23.371 22.6157 23.7385 24.4254 23.7385C26.2276 23.7385 27.9429 23.3785 29.239 22.7139C29.5081 22.5733 29.7608 22.4247 29.982 22.2681V23.5041C29.982 23.5115 29.982 23.5115 29.982 23.5196C29.982 23.5271 29.982 23.5271 29.982 23.5352C29.982 24.7003 27.6978 25.9985 24.4254 25.9985ZM24.4254 6.00899C27.6978 6.00899 29.982 7.30718 29.982 8.46484C29.982 9.62999 27.6978 10.9207 24.4254 10.9207C21.1531 10.9207 18.8688 9.6225 18.8688 8.46484C18.8688 7.29969 21.1531 6.00899 24.4254 6.00899Z" fill="#ffffff"/>
</svg>
    );
};

export default Coin;