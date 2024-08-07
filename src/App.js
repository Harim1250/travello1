import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Routes/About';
import Home from './Routes/Home';
import Services from './Routes/Services';
import Contact from './Routes/Contact';
import { DarkModeProvider } from './Components/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Services' element={<Services />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
