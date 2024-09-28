// import React from 'react'
import "../styles/Card.css"

type Props = {
    value:number;
    turned:boolean
}

export default function Card({value,turned}: Props) {



  return (
    <div className={turned?"card":"turnedCard card"}>
        {turned && <img src={`./src/assets/cardverso(${value+1}).png`} />}
    </div>
  )
}