import Start from './components/Start'
import './App.css'
import { useState } from 'react';
import PlayGame from './components/PlayGame';

function App() {
  
  const [playGame, setPlayGame] = useState(false);

  const toggle = () => {
    setPlayGame((prev) => !prev);
  }
  return (
    <>
     {playGame ? <PlayGame /> : <Start toggle={toggle} />}

    </>
  )
}

export default App
