import React,{useState} from 'react'
import authService from '../appwrite/auth'

import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'




function Signup() {
    
  
    const dispatch=useDispatch();
    const navigate=useNavigate();
   const{register,handleSubmit,formState:{errors}}=useForm()
   const[errorAppwrite,setError]=useState("")
   const[loading,setLoading]=useState(false)

const SignupFunc=async (data)=> {setError("")

    try {
        setLoading(true)
        const userData = await authService.createAccount(data)
        
        if (userData) {
            const userData = await authService.getCurrentUser()
            if(userData) dispatch(authLogin());
            navigate("/home")
            setLoading(false)
        }
    } catch (error) {
        setLoading(false)
        console.log(error.message)
        console.log(error)
        setError(error.message)
    }
    
 
}


  return !loading?(
    <div className="flex justify-center items-center h-screen ">
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mt-[-200px]">
        <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
        <h4> Already have an account? <p className='text-blue-600 bg-slate-50 hover:cursor-pointer' onClick={()=>navigate("/login")}>Login here  </p> </h4>
      
        <form onSubmit={handleSubmit(SignupFunc)}>
            <div className="mb-4 mt-4">

            {errorAppwrite && (<p className='text-red-600'>{errorAppwrite}</p>)}

                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                    type="text"
                    id='email'
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                    {...register("email",{
                        required:"Fill the email field",
                        validate:{
                            matchPattern:(value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Use proper syntax(eg. abc@xyz.com)"
                    }})}
                />
                {errors.email&& <p className='text-red-700'>{errors.email.message}</p> }
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                <input
                    type="password"
                   id='password'
                    placeholder="Enter your password"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                    {...register("password",{
                        required:"Fill the password field",
                        minLength:{
                          value:8,
                          message:"Password must be 8 characters long"
                        }
                    })}
                    
                />
                {errors.password&& <p className='text-red-700'>{errors.password.message}</p> }
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition-colors duration-300"
            >
                Create Account
            </button>
            
        </form>
    </div>

</div>

  ):<div className="flex justify-center items-center h-screen">
  <svg className="animate-spin h-10 w-10 text-gray-500 mb-52" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4">
    
    </circle>
    
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 4.418 3.582 8 8 8v-4zm16-1.084A8.004 8.004 0 0120 12h4c0 4.418-3.582 8-8 8v-4zM16.179 7.179L14.764 5.764l-2.414 2.415 1.415 1.415 2.414-2.415zM5.765 14.766l1.415-1.415-2.414-2.414-1.415 1.415 2.414 2.414zM18.849 9.902l-1.414 1.414 2.414 2.415 1.414-1.415-2.414-2.414zM9.902 18.849l1.414-1.414-2.414-2.414-1.414 1.414 2.414 2.414z"></path>
  </svg>

</div>

}

export default Signup