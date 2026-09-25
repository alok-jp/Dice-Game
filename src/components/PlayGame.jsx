import { useState } from 'react';
import Top from './Top';
import RollDice from './RollDice';  
import Rules from './Rules';



const PlayGame = () => {

  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [warning, setWarning] = useState("");
  const [rules, setShowRules] = useState(false)

  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  const reset = () => {
    setScore(0);
  }

  const rollDice = () => {

    if(!selectedNumber){
      setWarning("You have not seleted the number");
      return;
    }

    const randomNumber = generateRandomNumber(1,6);
    setCurrentDice(randomNumber);

    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev) => prev - 1);
    }

    setSelectedNumber(undefined);
  }



  return (
    <div>
      <Top selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} score={score} setScore={setScore} warning={warning} setWarning={setWarning}/>
      <RollDice currentDice={currentDice} rollDice={rollDice} rules={rules} reset={reset} setShowRules={setShowRules}></RollDice>
      {rules && <Rules />}
    </div>
  )
}

export default PlayGame
