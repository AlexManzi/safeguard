import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contactbar from './components/Contactbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contactbar/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
