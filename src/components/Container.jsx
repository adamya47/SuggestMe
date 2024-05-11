import React from 'react'

function Container({children}) {
  return (
    <div className="flex flex-row flex-wrap justify-center space-x-4  min-h-screen w-full bg-gray-100">
      
          {children}    
     
    </div>
  )
}

export default Container