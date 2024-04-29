import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div >
      <div className='bg-image-1' >
        <NavBar />
        <Header />
        <About />
      </div>
      <div className='bg-image-2' >
      <Projects />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
