import Styled from 'styled-components';

export const Card = Styled.div`
  height: 250px;
  width: 300px;
  padding: 5px;
  margin: 5px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  position: relative;
  overflow: hidden;
  &:focus {
    outline: none;
    border-color: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    }

`;

export const ImageWrapper = Styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  border-radius: 10px;
  &:focus {
      outline: none;
    }
`;
