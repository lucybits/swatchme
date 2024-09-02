import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Launchpad from './pages/Launchpad';
import Home from './pages/Home';
import Trending from './pages/Trending';
import PaletteGenerator from './pages/PaletteGenerator';
import Generator from './pages/Generator'; 
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavAndRoutes />
      </div>
    </Router>
  );
}

function NavAndRoutes() {
  const location = useLocation();
  const hideFooterPaths = ['/palette-generator/generator'];

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Launchpad />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/palette-generator" element={<PaletteGenerator />} />
        <Route path="/palette-generator/generator" element={<Generator />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!hideFooterPaths.includes(location.pathname) && location.pathname !== '/' && <Footer />}
    </>
  );
}

export default App;
