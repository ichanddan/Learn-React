import React from 'react'
import { CompC } from './CompC'

export const CompB = ({name}) => {
  return (
    <div className='bg-black text-white'>
      <h1>{name}</h1>
      <CompC name={name}/>
    </div>
  )
}
