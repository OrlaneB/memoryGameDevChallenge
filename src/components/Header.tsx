// import React from 'react'
import "../styles/Header.css"

type AppProps = {
    setCardOrder: React.Dispatch<React.SetStateAction<number[]>>;
    setGameStarted : React.Dispatch<React.SetStateAction<boolean>>;
    setTurnsNumber : React.Dispatch<React.SetStateAction<number>>;
    setTurnedCards : React.Dispatch<React.SetStateAction<boolean[]>>;
    turnsNumber : number;
    gameStarted:boolean;
  }

export default function Header({ setCardOrder, setGameStarted, turnsNumber,gameStarted,setTurnsNumber,setTurnedCards}: AppProps) {
    

    function createGame(){

        setCardOrder([]);
        setTurnsNumber(0);
        setTurnedCards([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);


        let randomNumbers:number[] = [];

        while(randomNumbers.length < 16){
            let num:number = Math.floor(Math.random() * 19);
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
    <div id="header">
        <p>Turns : {turnsNumber}</p>
        <h1>Memory Game</h1>
        <button onClick={()=>createGame()}>{gameStarted?"Restart":"Start"}</button>
    </div>
  )
}