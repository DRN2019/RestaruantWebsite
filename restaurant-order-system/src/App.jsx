import { useState } from 'react'

import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <div className="App" style = {{flex:1}}>
        <Navbar />
        
        <div className="content">
            <Routes>

              <Route 
                path = "/menu"
                element = {<Menu />} />

              <Route 
                path = "/contact"
                element = {<p>Hello</p>} />
              
              <Route 
                path = "/"
                element = {<Home title = "Italian Restaurant"/>} />

            </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
