import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

function Dog() {
    const dogUrl="https://api.freeapi.app/api/v1/public/dogs/dog/random"

    const [name, setName] = useState('');
  const [urll, setUrll] = useState('');
  const [weight, setWeight] = useState('');
  const [lifespan, setLifespan] = useState('');


    useEffect(()=>{

        const dataPromise =fetch(dogUrl).then((data)=>data.json())
        
        dataPromise.then((value)=>{

        if(value && value.data ){

        setName(value.data.name)
        
         setUrll(value.data.image.url) 
         setWeight(value.data.weight.imperial) 

         setLifespan(value.data.life_span) 
        }
          
      }
        ).catch((error)=>{
          
          console.log(error.message)
    })
        
       
      
       },[])

  return (
    <>
          <div className=" flex flex-1 justify-center items-center">

   <div className="max-w-sm rounded-r-3xl overflow-hidden shadow-lg mt-10">
   {urll?<img className="w-70 h-80" src={urll} alt="issue in API try reloading.." />:"Image not available (API ISSUE)"}
      <div className="px-6 py-4">
        {/* <div className="font-bold text-xl mb-2"></div> */}
        <p className="text-gray-700 text-base font-bold">Breed: {name}</p>
        <p className="text-gray-700 text-base font-bold">{name}'s Weight(imperical) ={weight}</p>
        <p className="text-gray-700 text-base font-bold">{name}'s Lifespan={lifespan}</p>
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Dog