// import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Review from './Components/Review'
import FAQ from './Components/FAQ'
import CareerLinks from './Components/CareerLinks'
import SearchPage from './features/internshipSearch/pages/SearchPage'

function App() {


  return (
    <>
    <Navbar/>
    <SearchPage/>
    <FAQ/>
    <Review/>
    <CareerLinks/>
    <Footer/>
    </>
  )
}

export default App
