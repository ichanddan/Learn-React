import React from 'react';
import propTypes from 'prop-types';
import { TurnryOprater } from '../TurnyOprater/TurnryOprater';
import { State } from '../Hooks/State';

// // step 1  =>>>
// export const LearnProps = (props) => {
//       return (
//             <div>
//                 <h1>{props.name}</h1>
//                 <h2>{props.age}</h2>
//                 <h3>{props.address}</h3>
//             </div>
//           )
//         }
        
        // // step 2  =>>>
        export const LearnProps = ({name,age,address}) => {
            return (
                <div>
        <h1 className='bg-red-900'>{name}</h1>
        <h2>{age}</h2>
        <h3>{address}</h3>
        <TurnryOprater/>
        <State/>
    </div>
  )
}


// steps props type 
// steps 1 (npm i prop-types)
// step 2 define propTypes like string number bollen flot


LearnProps.propTypes={
    name: propTypes.string,
    age: propTypes.number,
    address: propTypes.string
};

//step 3 define default propType if you not deinde props automatice used default props

LearnProps.defaultProps={
    name: "Name",
    age: 0,
    address: "Address"
}
