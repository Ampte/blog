import { useState } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css'
import ScrollToTop from './components/scrollTop';
import Header from './components/header'
import Home from './pages/home';
import Footer from './components/footer';
import Contact from './components/contact';
import HTMLBasics from './pages/html';
import CSSBasics from './pages/css';

function App() {

  return (
    <>
    <HashRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/html' element={<HTMLBasics/>}/>
        <Route path='/css' element={<CSSBasics/>}/>
      </Routes>
      <Contact/>
      <Footer/>
    </HashRouter>
    </>
  )
}

export default App
