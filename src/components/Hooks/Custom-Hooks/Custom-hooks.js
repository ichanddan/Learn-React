import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Custom = (url) => {
    const [data, setData]=useState([])
    useEffect(()=>{
        const main = async ()=>{
            const res= await axios.get(url)
            setData(res)
        }
        main()
    },[])
  return [data]
}
