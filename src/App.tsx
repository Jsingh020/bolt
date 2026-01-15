import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyEarly from './pages/WhyEarly';
import Compare from './pages/Compare';
import HowWeWork from './pages/HowWeWork';
import ForParents from './pages/ForParents';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-early" element={<WhyEarly />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/for-parents" element={<ForParents />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
