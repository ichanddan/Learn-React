import React from 'react'

export const TurnryOprater = () => {
    const login=false;
  return (
    <div>
        {
            login==false ? <h1>Hello bro</h1> : <h1>Hi baby</h1>
        }
    </div>
  )
}
