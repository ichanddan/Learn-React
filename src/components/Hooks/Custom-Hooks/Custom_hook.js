import React from 'react';
import { Custom } from './Custom-hooks';

export default function Custom_hook() {
    const [data] = Custom("https://hub.dummyapis.com/employee?noofRecords=5&idStarts=1001");
    

    return (
        <div>
            <div className="flex flex-wrap w-full items-center justify-around">
                {data.map((element, index) => (
                    <div key={index} className="border m-3 shadow-2xl rounded-md w-1/4">
                        <div className="mx-5 my-5">
                            <p>{element.salary}</p>
                            <p>{element.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
