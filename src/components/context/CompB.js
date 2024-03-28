import React from 'react'
import { CompC } from './CompC'

export const CompB = () => {
  return (
    <div className='bg-black text-white'>
      <h1>CompB</h1>
      <CompC />
    </div>
  )
}
