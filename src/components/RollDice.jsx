import styled from 'styled-components';
import Rules from './Rules'

import Button, { OutlineButton } from '../Button';

const RollDice = ({currentDice, rollDice, rules, setShowRules, reset}) => {
  return (
    <Container>
      <div className="Dice">
        <div onClick={rollDice}>
        <img src={`./images/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
      </div>
      <div className='btns'>
        <Button onClick={reset}>Reset</Button>
        <OutlineButton
        onClick = {() => setShowRules((prev) => !prev)}
        >{
           rules ? "Hide" : "Show"
        } Rules</OutlineButton>
      </div>
    </Container>
  )
}

export default RollDice

const Container = styled.div`

    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 36px;



    .Dice{
        display: flex;
        flex-direction:column;
        align-items: center;
        gap: 15px;

        p{
            font-weight: 500;
            font-size: 24px;
            color: var(--blue);
        }

        img{
            cursor: pointer;
        }
    }

    .btns{
        display: flex;
        flex-direction: column;
        gap:24px;

    }
`;
