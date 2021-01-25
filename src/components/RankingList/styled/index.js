import Styled from 'styled-components';

export const Card = Styled.div`
  background: white;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.3);
  padding: 5px;
  margin-top: 5px;
  width: 100%;

  .image {
    width: 100px;
    height: 80px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-repeat: no-repeat;
  }

  .position { 
    padding: 10px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .title { 
    font-weight: bold;
    font-size: 1.2rem;

  }

  .subtitle { 

  }

  .infos { 
    padding: 5px 10px;
  }

`;

export const a = Styled.div``;
