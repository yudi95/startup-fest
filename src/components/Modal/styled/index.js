import Styled from 'styled-components';

export const Overlay = Styled.div`
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

export const ModalCard = Styled.div`
  background-color: #fefefe;
  margin: auto;
  overflow-y: hidden;
  overflow-x: auto;
  border: 1px solid #888;

  /* width: 50%; */
  max-width: 1074px;
  @media screen and (max-width: 1024px) {
      width: 700px;
  }

  @media screen and (max-width: 800px) {
      width: 600px;
  }

  @media screen and (max-width: 600px) {
      width: 90vw;
  }

`;

export const ModalHeader = Styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  padding: 8px;
  background-color: #31263E;//#575982; //#496599
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ModalContent = Styled.div`
  padding: 10px 30px;

`;

export const Close = Styled.span`
  position: absolute;
  right: 15px;
  /* color: #aaaaaa; */
  /* color: red; */
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover{
    color: #000;
    text-decoration: none;
    cursor: pointer;
  };
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
