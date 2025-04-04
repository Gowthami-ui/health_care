import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Profile from './Components/Profile/Profile'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/MyWork/Mywork'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
    </div>
  )
}

export default App
