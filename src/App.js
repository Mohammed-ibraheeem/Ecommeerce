import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layouts from './components/Layouts';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App; 
