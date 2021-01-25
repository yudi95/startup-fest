import { createGlobalStyle } from 'styled-components';
import './fonts.css';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Roboto', sans-serif;
    background: #f0f0f0;//#DFDFDF;
    background-repeat: round;
    font-size: 14px;
    color: #000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    }

    main {
        margin: 0 auto;
        width: 1300px;
        background-color: transparent;
        height: auto;
        transition: width 0.5s ease-in-out;

        @media screen and (max-width: 1024px) {
            width: 700px;
        }

        @media screen and (max-width: 800px) {
            width: 600px;
        }

        @media screen and (max-width: 600px) {
            width: 90vw;
        }
    }
`;
