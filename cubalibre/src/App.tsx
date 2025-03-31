import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Tradition from './pages/Cuba';

function App() {
  return (
    <Router>
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tradition" element={<Tradition />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
