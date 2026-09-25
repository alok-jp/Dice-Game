import styled from "styled-components";

const Rules = () => {
  return (
    <div>
    <Container>
      <div className='rules'>
        <h1>How to play game</h1>
      </div>
      <div className="para">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then 1 point will be dedcuted </p>
        </div>
    </Container>
    </div>
  )
}

export default Rules

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    background: var(--blue);
    color: white;
    height: 208px;
    width: 749px;
    gap:36px;
    padding: 20px 50px;
    border-radius: 10px;
    margin: 30px auto;

    .rules{

    font-weight: 700;
    font-size: 24px;


    }

    .para{
        display: flex;
        flex-direction:column;
        align-items: start;
        gap: 6px;
        font-weight: 500;
        font-size: 16px;
    }


`;
