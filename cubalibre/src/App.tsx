import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import CubaMain from './pages/CubaMain';
import Harbour from './pages/Harbour';

function App() {
  return (
    <Router>
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cubamain" element={<CubaMain />} />
        <Route path="/harbour" element={<Harbour />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
