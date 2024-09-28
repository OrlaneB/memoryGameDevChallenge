// import React from 'react'

type AppProps = {
    setCardOrder: React.Dispatch<React.SetStateAction<number[]>>;
    setGameStarted : React.Dispatch<React.SetStateAction<boolean>>;
    turnsNumber : number;
  }

export default function Header({ setCardOrder, setGameStarted, turnsNumber}: AppProps) {
    

    function createGame(){
        let randomNumbers:number[] = [];

        while(randomNumbers.length < 20){
            let num:number = Math.floor(Math.random() * 20);
            if(!randomNumbers.includes(num)) {
                randomNumbers.push(num);
                randomNumbers.push(num);
            }
        }

        randomNumbers.sort(()=>Math.random()-0.5)

        setCardOrder(randomNumbers);
        setGameStarted(true);

        console.log(randomNumbers);
    }

    

  return (
    <>
        <p>Turns : {turnsNumber}</p>
        <button onClick={()=>createGame()}>Start</button>
    </>
  )
}