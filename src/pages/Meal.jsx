import React, { useState,useEffect } from 'react'

function Meal() {

    const [title,setTitle]=useState("")
    const [videoLink,setVideoLink]=useState("")
    const[origin,setOrigin]=useState("")
    const[error,setError]=useState("")
    const mealUrl="https://api.freeapi.app/api/v1/public/meals/meal/random"
  const [picUrl,setPicUrl]=useState("")

useEffect( ()=>{

setError("")
  const fetchData=async()=>{
try {
  const response=await fetch(mealUrl)

 const value=await response.json()

 if(value && value.data){
setTitle(value.data.strMeal)
setOrigin(value.data.strArea)
setVideoLink(value.data.strYoutube)
setPicUrl(value.data.strMealThumb)
 }
 


  
} catch (error) {
  setError(error.message)
}



  }

  fetchData();
}
  
  ,[] )




  return (
    <div className=" flex flex-1 justify-center items-center">

   <div className="max-w-sm rounded-r-3xl overflow-hidden shadow-lg mt-10">
     
      <div className="px-6 py-4 "> 
       {videoLink?(<a href={videoLink} target='_blank'> 
        <img className="w-full hover:border hover:border-black hover:rounded-md" src={picUrl} alt="issue in API try reloading.." /></a>):
         <img className="w-70 h-80 X hover:border hover:border-black hover:rounded-md" src={picUrl} alt="issue in API try reloading.." />}
        
        <p className="text-gray-700 text-base font-bold">Meal: {title?title:"Info not available"}</p>
        <p className="text-gray-700 text-base font-bold">Origin of Meal: {origin?origin:"Info not available :("}</p>
        <p className="text-gray-700 text-base font-bold">
            <a href={videoLink} className='hover:underline hover:text-red-700' target='_blank'>Click here/on Image (for Tutorial)</a>
        </p>
        {error && (<p className='text-red-700'>{error}</p>)}
      </div>
    </div>
    </div>
  )

}

export default Meal