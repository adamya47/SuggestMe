import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {Login,Signup,Book,Dog,Meal,Home} from "./components/index.js"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>

 <Route path="/signup" element={<Signup/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/home" element={<Home/>}/>

<Route path="/dog" element={<Dog/>}/>

<Route path="/meal" element={<Meal/>}/>

<Route path="/book" element={<Book/>}/>

    </Route>




  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
