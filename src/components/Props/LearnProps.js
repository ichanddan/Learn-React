import React from 'react'

// steps passing props and use props npm i 

// // step 1  =>>>
// export const LearnProps = (props) => {
//   return (
//     <div>
//         <h1>{props.name}</h1>
//         <h2>{props.age}</h2>
//         <h3>{props.address}</h3>
//     </div>
//   )
// }

// // step 2  =>>>
export const LearnProps = ({name,age,address}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{address}</h3>
    </div>
  )
}

