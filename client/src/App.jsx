import React from 'react'
import Header from './Pages/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import StepCard from './Pages/StepCard'
import FAQAccordion from './Pages/Faqs'
import Footer from './Pages/Footer'
import EmiCalculator from './Pages/Emicalculator'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <StepCard/>
      <FAQAccordion/>
      <EmiCalculator/>
      <Footer/>
    </div>
  )
}

export default App
