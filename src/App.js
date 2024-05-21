import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Home from './home/Home';
import Skills from './component/header/skills/Skills';
import Projects from './component/header/qualification/Projects';
import ContactForm from './component/header/contact/Contact';

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
    <Home/>
    <Skills/>
    <Projects/>
    <ContactForm/>
    </main>
    </>
  )
}

export default App;