// import React from 'react'
import { useState } from "react";
import Card from "./Card"

type Props = {
    gameStarted:boolean;
    cardOrder:number[];
    setTurnsNumber : React.Dispatch<React.SetStateAction<number>>;
    turnsNumber : number;
}

type firstCard = {
    value:number;
    index:number
}

export default function Cards({gameStarted,cardOrder,setTurnsNumber,turnsNumber}: Props) {

    const [turnedCards,setTurnedCards] = useState<boolean[]>([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    const [firstCard, setFirstCard] = useState<firstCard>({value:0,index:0});
    const [clickEnabled,setClickEnabled] = useState<boolean>(true);

    function handleClick(cardIndex:number,cardValue:number){

        if(turnedCards.filter(b=>b===true).length%2){

            console.log("second card")
            let newArray:boolean[] = [...turnedCards];
            newArray[cardIndex] = true;
            setTurnedCards(newArray);

            checkCardMatch(firstCard,{value:cardValue,index:cardIndex});

        } else {

            console.log("first card")
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
            },2000)
        }
        
        setTurnsNumber(turnsNumber+1);

        if(turnedCards.filter(b=>b===true).length===20) console.log("You won!")
    }

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)",gap:"20px"}}>
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