import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Login from './components/Login'
import About from './components/About'
import SignUp from './components/SignUp'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>

      <Route path = '/' element={<Home/>}/>
      <Route path = '/Gallery' element={<Gallery/>}/>
      <Route path = '/Login' element={<Login/>}/>
      <Route path = '/About' element={<About/>}/>
      <Route path = '/SignUp' element={<SignUp/>}/>
      <Route path = '/ContactUs' element={<ContactUs/>}/>

    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App