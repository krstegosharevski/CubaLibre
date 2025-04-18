import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import CubaMain from './pages/CubaMain';
import Harbour from './pages/Harbour';
import CubaDrim from './pages/CubaDrim';
import { useEffect } from 'react';
import Menu from './pages/Menu';

function App() {
  //implement
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]); 

  return (
    <Router>
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cubamain" element={<CubaMain />} />
        <Route path="/harbour" element={<Harbour />} />
        <Route path="/cubadrim" element={<CubaDrim />} />
        <Route path="/menu" element={<Menu />}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
