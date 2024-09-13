import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages'
import Posts from './pages/posts'
import './App.css'
import Login from './pages/auth/login'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/auth/login' element={<Login/>}></Route>
          <Route path='/posts' element={<Posts/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
