import styled, { keyframes } from 'styled-components';

const Top = ({selectedNumber, setSelectedNumber,score, setWarning, warning}) => {

    const arr = [1,2,3,4,5,6];

    const numberSelectHandler = (num) => {
      setSelectedNumber(num);
      setWarning("");
    }
  

  return (
    <Header>
      <div className='score'>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
      <div className='numberSelector'>
      <div className="selectorContainer">
        <div>
        <p className='error'>{warning}</p>
        </div>
        <div className="selector">
          
            {
                arr.map((num,i) => (
                    <Box 
                    $isSelected = {num === selectedNumber}
                    key={i} onClick = {() => numberSelectHandler(num)}>{num}</Box>
                ))
            }
        </div>
        <p>Select Number</p>
        </div>

      </div>
    </Header>
  )
}

export default Top;


const Header = styled.header`

    padding: 50px 40px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    min-height: 151px;

    .score{
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        width: 151px;
        height:151px;
        color: var(--blue);
        border: 2px solid var(--blue);
        border-radius: 5px;
    }

    h1{
        font-weight: 500;
        font-size: 100px;
    }

    p{
        font-weight: 500;
        font-size: 24px;
    }

    .selector{
        display: flex;
        gap: 24px;
    }

    .selectorContainer{
       display: flex;
       flex-direction:column;
       align-items: end;
       gap: 30px;
       padding: 10px;
       min-width: 552px;
       min-height: 138px;

       p{
        font-weight: 700;
        font-size: 24px;
       }

       .error{
        color:red;
        font-size: 16px;
        
       }
    }
  `;

  const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size:24px;
    color: var(--blue);
    cursor: pointer;

    background: ${(props) =>  props.$isSelected ? 'var(--blue)' : 'white' };
    color: ${(props) =>  props.$isSelected ? 'white' : 'var(--blue)' };
    transition: all 0.2s ease-in-out;
    animation: ${(props) => props.$isSelected ? pop : ''} 0.3s ease-in-out;


  `;

const pop = keyframes`
    0%{transform: scale(1);}
    50%{transform: scale(1.2);}
    100%{transform: scale(1);}
    `;