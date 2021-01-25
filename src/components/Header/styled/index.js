import Styled from 'styled-components';

export const HeaderBar = Styled.div`
  height: 60px;
  width: 100vw;
  color: black;
  background: white;
  box-sizing: border-box;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.3);
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;

  /* margin: 0 auto; */
 .header-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    transition: width 0.5s ease-in-out;
    width: 1300px;
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

  .header-links { 
    display: flex;
  }
`;

export const HButton = Styled.div`
  margin-left: 15px;
  margin-right: 15px;
  /* min-width: 121px; */
  border-bottom: ${(({ isChecked }) => (isChecked ? '1px solid #4d4c4c' : '1px solid #e6e6e6'))};
  color: ${(({ isChecked }) => (isChecked ? 'black' : '#9e9e9e'))};
  font-weight: ${(({ isChecked }) => (isChecked ? '600' : '100'))};
  text-align: center;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #4d4c4c;
    color: black;
    /* color: #e6e6e6; */
  }
`;
