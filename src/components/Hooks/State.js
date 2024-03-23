import React, { useState } from 'react'

export const State = () => {
    const [Num, seNum]=useState(1)
    function inc(){
      seNum(Num +1);
    }
    function dec(){
      seNum(Num - 1);
    }

  return (
    <div>
        <h1 className='flex justify-center items-center font-bold text-4xl'>{Num}</h1>
      <div className='flex justify-center items-center'>
        <button className='border p-2 m-2 ' onClick={inc}>Incriment</button>
        <button className='border p-2 m-2 ' onClick={dec}>Decriment</button>
      </div>
    </div>
  )
}
