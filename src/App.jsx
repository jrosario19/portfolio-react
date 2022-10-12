import React, { useEffect } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Expirience from './components/expirience/Expirience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ReactGa from 'react-ga'

const App = () => {
  useEffect(()=>{
    ReactGa.initialize('UA-189536424-1')

    ReactGa.pageview('/')

  },[])

  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Expirience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
