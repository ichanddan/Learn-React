import React from 'react'
import { CompB } from './CompB'

export const CompA = () => {
  return (
    <div className='bg-red-900  text-white'>
      <h1>CompA</h1>
        <CompB />
    </div>
  )
}
