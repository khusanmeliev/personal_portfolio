import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from './pages/navbar/Navbar'
import Services from './pages/services/Services'
import Work from './pages/work/Work'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Services />
      <Work />
      <Contact />

    </>
  )
}

export default App