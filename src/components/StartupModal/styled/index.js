import Styled from 'styled-components';

import Modal from '../../Modal';

export const ModalRating = Styled.div`

  display: flex;
  flex-direction: column;

  .startup-name {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .description { 
    text-align: start;
    margin: 10px 0px;
  }

  .voting-text {
    margin: 10px 0px;
  }

  .stars-container { 
    display: flex;
    justify-content: space-around;
    margin: 10px 0px;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }
  
  .stars-item{

  }

  .btn-startup { 
    display: flex;
    justify-content: center;
    margin: 10px 0px;

    & > button { 
      padding: 8px 16px;
      border-style: none;
      text-transform: uppercase;
      background: transparent;
      color: #575982;
      border: 2px solid #575982;
      border-radius: 8px;
      box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
      min-width: 100px;

      &:hover {
        background: #404161;
        color: white;
      }

      &:focus { 
        outline: none;
      }
    }
  }
`;

export const a = {};
