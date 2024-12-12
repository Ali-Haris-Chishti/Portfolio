
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/hobbies' element={<Hobbies />} />
      </Routes>
    </div>
  );
}

export default App;
