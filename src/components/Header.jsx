import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'


function Header() {

  const status=useSelector((state)=>state.auth.status)
 const navigate=useNavigate()
 const dispatch=useDispatch()

function logoutHandler(){

  authService.logout().then(()=>dispatch(logout())).then(()=>navigate("/login")) 
  

}

const navItems=[{
name:"Login",
visible:!status,
path:"/login"
},
{
  name:"Signup",
  visible:!status,
  path:"/signup"
  }
,
{
  name:"Home",
  visible:status,
  path:"/home"
  },
 


]

  return (
    <header className="bg-black py-4">
       
    <div className="container mx-auto flex justify-between items-center " onClick={()=>{
      if(status) navigate("/home")}}>
<div className='flex flex-row items-center hover:cursor-pointer'>
<h1 className="text-white text-4xl font-extrabold tracking-tight inline">SuggestMe
    
    </h1>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 2a5.5 5.5 0 0 0-5.5 5.5c0 3.026 2.474 5.5 5.5 5.5s5.5-2.474 5.5-5.5A5.5 5.5 0 0 0 10 2zm0 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" clipRule="evenodd" />
  <path d="M10 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
</svg>
</div>
   
    
  


      <nav>
        <ul className="flex space-x-4">
          {
            navItems.map((item)=>item.visible?(<li key={item.name}>
              <div className='h-8 w-14 bg-slate-300 rounded-xl flex items-center justify-center hover:border-solid  hover:rounded-xl hover:border border-white'
              onClick={()=>{navigate(`${item.path}`)}}
              >
              <button  className="text-black ">{item.name}</button>
              </div>
               </li>)
           
           :null)



          }

          {/*Logout wala alag se cause usme onClick pe logouthandeler function bhi toh lagana hai */}

          {status&& <li>
              <div key="logout" className='h-8 w-14 bg-slate-300 rounded-xl flex items-center justify-center hover:border-solid  hover:rounded-xl hover:border border-white'
             
              >
              <button  className="text-black "  onClick={logoutHandler} >Logout</button>
              </div>
               </li>}

       
          
          
          
        </ul>
      </nav>
    </div>
  </header>
  )

}

export default Header