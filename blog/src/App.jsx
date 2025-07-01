import { useState } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css'
import Header from './components/header'
import Home from './pages/home';
import Footer from './components/footer';
import Contact from './components/contact';

function App() {

  return (
    <>
    <HashRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Contact/>
      <Footer/>
    </HashRouter>
    </>
  )
}

export default App
