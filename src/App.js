import react from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ImageSlider from './components/imageSlider';
import { SliderData } from './components/sliderData';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className="navbar" />
        <ImageSlider slides={SliderData} />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
