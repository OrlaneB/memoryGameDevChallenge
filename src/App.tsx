// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Cards from './components/Cards'
import { useState } from 'react'

function App() {


  const [cardOrder,setCardOrder] = useState<number[]>([])
  const [gameStarted,setGameStarted] = useState<boolean>(false)
  const [turnsNumber,setTurnsNumber] = useState<number>(0);

  return (
    <>
      <Header setCardOrder={setCardOrder} setGameStarted={setGameStarted} turnsNumber={turnsNumber}/>
      <Cards gameStarted={gameStarted} cardOrder={cardOrder} setTurnsNumber={setTurnsNumber} turnsNumber={turnsNumber}/>
      <a href="https://www.flaticon.com/free-stickers/botanical" title="botanical stickers">Botanical stickers created by Stickers - Flaticon</a>
    </>
  )
}

export default App
