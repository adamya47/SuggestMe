import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

function Book() {
    const bookUrl="https://api.freeapi.app/api/v1/public/books/book/random"

    const [name, setName] = useState('');
  const [urll, setUrll] = useState('');
  const [publisher, setPublisher] = useState('');
  const [pages,setPages]=useState(" ")
 const[error,setError]=useState(" ")
 

    useEffect(()=>{
setError(" ")
        const dataPromise =fetch(bookUrl).then((data)=>data.json())
        
        dataPromise.then((value)=>{

        if(value && value.data && value.data.volumeInfo ){
        setName(value.data.volumeInfo.title)
         setUrll(value.data.volumeInfo.imageLinks.thumbnail) 
         setPublisher(value.data.volumeInfo.publisher)
         setPages(value.data.volumeInfo.pageCount)
         
         
        }
          
      }
        ).catch((error)=>setError(error.message))
        
       
      
       },[])

  return (
    <>
          <div className=" flex flex-1 justify-center items-center">

   <div className="max-w-sm rounded-r-3xl overflow-hidden shadow-lg mt-10">
      <img className="w-70 h-80" src={urll} alt="issue in API try reloading.." />
      <div className="px-6 py-4">
        {/* <div className="font-bold text-xl mb-2"></div> */}
        <p className="text-gray-700 text-base font-bold">Title: {name?name:"Info not available"}</p>
        <p className="text-gray-700 text-base font-bold">Publisher: {publisher?publisher:"Info not available :("}</p>
        <p className="text-gray-700 text-base font-bold">Page Count:{pages?pages:"Info not available :("}</p>
        {error && (<p className='text-red-700'>{error}</p>)}
      </div>
    </div>
    </div>
    </>
  )
}

export default Book