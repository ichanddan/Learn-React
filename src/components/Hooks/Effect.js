import React, { useEffect, useState } from "react";

export const Effect = () => {
  const [state, setState] = useState(3);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const get = await fetch(
          `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
        );
  
        const res = await get.json();
        setData(res);
      } catch (error) {
        console.error(error)
      }
    }
    document.title=`${state} Empoloy online`
    getData();
  }, [state]);
  console.log("Hi chandan");
  return (
    <div>
        <div className="flex items-center justify-center">
           <button
           className="border py-2 px-5 bg-black text-white rounded-xl"
        onClick={() => {
          setState(state + 3);
        }}
      >
        Add More {state}
      </button> 
        </div>
      
      <div>
        <div className="flex flex-wrap w-full items-center justify-around">
          {data.map((element, index) => {
            return (
              <div
                key={index}
                className="border m-3 shadow-2xl rounded-md w-1/4"
              >
                <img className="w-full h-1/2" src={element.imageUrl} alt="img"/>
                <div className="mx-5 my-5">
                  <p>{element.id}</p>
                  <h1>{`${element.firstName} ${element.lastName}`}</h1>
                  <p>{element.email}</p>
                  <p>{element.age}</p>
                  <p>{element.dob}</p>
                  <p>{element.salary}</p>
                  <p>{element.address}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
