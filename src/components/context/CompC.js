import React, { useContext } from 'react';
import { AppData } from '../../App';
export const CompC = () => {
  const data1 = useContext(AppData)
  return (
    <div className='bg-green-600  text-white'>
      <h1>CompC</h1>
      <h1>Data: {data1.obj.id}</h1>
      <h1>Name: {data1.obj.name}</h1>
      <h1>Addres: {data1.obj.Addres}</h1>
      <h1>Age: {data1.obj.Age}</h1>
    </div>
  )
}
