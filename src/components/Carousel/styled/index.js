import Styled from 'styled-components';

export const Item = Styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    &:focus {
      outline: none;
    }
    /* border: 1px solid black; */
    /* flex: none; */
    /* scroll-snap-align: start; // para criar "âncoras" nos itens. funciona com o scroll-snap-type */
    /* pointer-events: none; */
`;

export const Slider = Styled.div` 
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    overscroll-behavior-y: contain; // para impedir scroll na página toda?. 
    scroll-behavior: ${(props) => (props.smooth ? 'smooth' : 'auto')};
    /* scroll-snap-type: x mandatory; */
    /* overflow-scrolling: touch; */
    /* -webkit-overflow-scrolling: touch; */
    &:focus {
      outline: none;
    }
`;

export const SliderWrapper = Styled.div`
    width: ${(props) => props.width || '60vw'};;
    height: ${(props) => props.height || '200px'};
    /* border: 0.5px solid gray; */

    text-align: center;
    overflow: hidden;
    position: relative;
    text-align: center;
    overflow: hidden;

    &:focus {
      outline: none;
    }
`;

export const ButtonsWrapper = Styled.ol`
    position: absolute;
    display: flex;
    justify-content: center;
    /* background-color: black; */
    /* top: 0px; */
    left: 0px;
    bottom: 0px;
    right: 0px;
`;

export const SliderButton = Styled.li`
    border: ${({ checked }) => (checked ? '0.5px solid gray' : '')};
    height: 10px;
    width: 40px;
    list-style: none;
    margin-left: 5px;
    margin-right: 5px;
    /* border-top: 10px solid transparent; */
    /* border-bottom: 10px solid transparent; */
    opacity: 0.5;
    background-color: #e0e0e0;
    background-color:  ${({ checked }) => (checked ? '#fff' : '#e0e0e0')};
    &: hover { 
        cursor: pointer;
        background-color: #fff;
    }
    
`;
