import React, { useRef } from 'react'
import { useState } from 'react';

export default function Ref() {
    const ref = useRef();
    const [name, setName]=useState("chandan")
    console.log(ref)
  return (
    <div>
        <h1>Learn useRef</h1>
        <input ref={ref} value={name} placeholder='Enter you text' onChange={(e)=>{setName(e.target.value)}}/>
        <div className='p-2 gap-6'>
        <button onClick={()=>{setName(" ")}}>reset</button>
        <br/>
        <button onClick={()=>{setName("badal"); ref.current.style.color="red"}}>change</button>

        </div>
    </div>
  )
}
