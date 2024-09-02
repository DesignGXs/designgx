import React from 'react'
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import TeamPage from './components/Team'
 import Cursor from './components/Cursor' 
import Ceo from './components/Ceo'
const App = () => {
  return (
    <div>
      <Cursor/>
      <Nav/>
      <Home/>
      <Service/>
      <TeamPage/>
      <Ceo/>
      <Contact/> 
      <Footer/> 
     
    </div>
  )
}

export default App