import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { Header,Footer } from './components'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{

async function initiallization(){

  const userData=await authService.getCurrentUser();
  if(userData){
    dispatch(login())
    navigate("/home")
  }else{
    dispatch(logout())
    navigate("/signup")
  }
  setLoading(false)

} 
initiallization();

  },[dispatch,navigate])

  return !loading? (
    <div>
<Header/>
<main>
<Outlet/> 
</main> 

<Footer/>
</div>
    
  ):
  <div className="flex justify-center items-center h-screen">
      <svg className="animate-spin h-10 w-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4">
        
        </circle>
        
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 4.418 3.582 8 8 8v-4zm16-1.084A8.004 8.004 0 0120 12h4c0 4.418-3.582 8-8 8v-4zM16.179 7.179L14.764 5.764l-2.414 2.415 1.415 1.415 2.414-2.415zM5.765 14.766l1.415-1.415-2.414-2.414-1.415 1.415 2.414 2.414zM18.849 9.902l-1.414 1.414 2.414 2.415 1.414-1.415-2.414-2.414zM9.902 18.849l1.414-1.414-2.414-2.414-1.414 1.414 2.414 2.414z"></path>
      </svg>
    
    </div>
    
}

export default App
