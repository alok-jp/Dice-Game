import styled, { keyframes } from 'styled-components';

const pop = keyframes`
    0%{transform: scale(1);}
    50%{transform: scale(1.2);}
    100%{transform: scale(1);}
    `;
    
const Button = styled.button`
  position: relative;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);
  width: 220px;
  height: 44px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  padding: 10px 18px;
  border: none;
  cursor: pointer;

  

  &:hover{
    border: 2px solid var(--blue);
    box-shadow: 0px 0px 10px var(--blue);
    background: white;
    transition: all 0.3s ease-in-out;
    color: var(--blue);
    animation: ${pop} 0.3s ease-in-out;
  }
`;

export const OutlineButton = styled(Button)`

  background: white;
  border: 2px solid var(--blue);
  color: var(--blue);

  &:hover{
    background-color: var(--blue);
    color:white;
  }
`;

export default Button;
