// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Cards from './components/Cards'
import Animation from './components/Animation'

import { useState } from 'react'

function App() {


  const [cardOrder,setCardOrder] = useState<number[]>([])
  const [gameStarted,setGameStarted] = useState<boolean>(false)
  const [turnsNumber,setTurnsNumber] = useState<number>(0);
  const [turnedCards,setTurnedCards] = useState<boolean[]>([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

  return (
    <>



      <Header gameStarted={gameStarted} setCardOrder={setCardOrder} setGameStarted={setGameStarted} setTurnsNumber={setTurnsNumber} turnsNumber={turnsNumber} setTurnedCards={setTurnedCards} />
      <Cards gameStarted={gameStarted} setGameStarted={setGameStarted} cardOrder={cardOrder} setTurnsNumber={setTurnsNumber} turnsNumber={turnsNumber} turnedCards={turnedCards} setTurnedCards={setTurnedCards} />

      {!gameStarted && turnsNumber===0 &&
        <p>Click on start to play</p>
      }

      {!gameStarted && turnsNumber>0 &&
        <div>
          <p>Congrats, you won in {turnsNumber} flips!</p>
          <Animation/>
        </div>
        
      }
     
      

     {gameStarted && <a href="https://www.flaticon.com/free-stickers/botanical" title="botanical stickers">Botanical stickers created by Stickers - Flaticon</a>}
    </>
  )
}

export default App
