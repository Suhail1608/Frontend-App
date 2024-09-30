import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Posts from './pages/posts/posts'
import './App.css'
import Login from './pages/auth/login/login'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import SignUp from './pages/auth/signup/signup'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/auth/login' element={<Login/>}></Route>
            <Route path='/auth/signup' element={<SignUp/>}></Route>
            <Route element={<AuthLayout/>}>
              <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/posts' element={<Posts/>}></Route>
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
