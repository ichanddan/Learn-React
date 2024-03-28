import React from 'react'
import { CompB } from './CompB'

export const CompA = ({name}) => {
  return (
    <div className='bg-red-900  text-white'>
      <h1>{name}</h1>
        <CompB name={name}/>
    </div>
  )
}
