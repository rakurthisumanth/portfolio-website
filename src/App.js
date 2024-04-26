import About from './components/About';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/About"  element={<About/>} />
        <Route path="/Services"  element={<Services/>} />
        
        <Route path="/Contact"  element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
