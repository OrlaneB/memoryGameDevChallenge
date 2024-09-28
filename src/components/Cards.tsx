// import React from 'react'
import { useState } from "react";

import Card from "./Card"
import "../styles/Cards.css"

type Props = {
    gameStarted:boolean;
    cardOrder:number[];
    setTurnsNumber : React.Dispatch<React.SetStateAction<number>>;
    turnsNumber : number;
    setGameStarted : React.Dispatch<React.SetStateAction<boolean>>;
    turnedCards : boolean[];
    setTurnedCards : React.Dispatch<React.SetStateAction<boolean[]>>;
}

type firstCard = {
    value:number;
    index:number
}

export default function Cards({gameStarted, setGameStarted, cardOrder,setTurnsNumber,turnsNumber,turnedCards,setTurnedCards}: Props) {

    // const [turnedCards,setTurnedCards] = useState<boolean[]>([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    const [firstCard, setFirstCard] = useState<firstCard>({value:0,index:0});
    const [clickEnabled,setClickEnabled] = useState<boolean>(true);

    function handleClick(cardIndex:number,cardValue:number){
        if(!clickEnabled) return;

        if(turnedCards.filter(b=>b===true).length%2){

            setClickEnabled(false);
            let newArray:boolean[] = [...turnedCards];
            newArray[cardIndex] = true;
            setTurnedCards(newArray);

            checkCardMatch(firstCard,{value:cardValue,index:cardIndex});

        } else {

            let newArray:boolean[] = [...turnedCards];
            newArray[cardIndex] = true;
            setTurnedCards(newArray);

            setFirstCard({value:cardValue,index:cardIndex});
            
        }
    }

    function checkCardMatch(firstCard:firstCard,secondCard:firstCard){
        if(firstCard.value!==secondCard.value){
            setTimeout(()=>{
                let newArray = [...turnedCards];
                newArray[firstCard.index] = false;
                newArray[secondCard.index] = false;
                setTurnedCards(newArray);
                setClickEnabled(true);
            },2000)
        } else {
            setClickEnabled(true);
        }
        
        setTurnsNumber(turnsNumber+1);

        console.log(turnedCards)
        if(turnedCards.filter(b=>b===false).length===1) setTimeout(()=>{setGameStarted(false)},1000);
    }

  return (
    <div id="cardGrid">
        {gameStarted &&
            cardOrder.map((value,index)=>(
                <div onClick={()=>handleClick(index,value)} key={index}>
                    <Card value={value} turned={turnedCards[index]}/>
                </div>
            ))

        }
    </div>
  )
}