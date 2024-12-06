import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './pages/Page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/graphs" element={<Page />} />
        <Route path="/about" element={<h1>About Us</h1>} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
