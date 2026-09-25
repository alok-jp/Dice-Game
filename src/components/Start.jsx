import Button from "../Button";
import styled from "styled-components"; 


const Start = ({toggle}) => {
  return (
    <Container >
      <div>
        <img src="./images/dices.png" alt="" />
      </div>
      <div className="text">
        <h1>DICE GAME</h1>
        <Button onClick = {toggle}> Play Now </Button>
      </div>
    </Container>
  )
}

export default Start

const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 150px;

    h1{
        font-weight: 700;
        font-size: 96px;
        color: var(--blue);
    }

    .text{
        display:flex;
        flex-direction:column;
        align-items: end;

    }

`;


    




