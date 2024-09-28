// import React from 'react'

type Props = {
    value:number;
    turned:boolean
}

export default function Card({value,turned}: Props) {



  return (
    <div>
        {turned && <p>{value}</p>}
        {!turned && <p>off</p>}
    </div>
  )
}