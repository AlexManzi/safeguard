import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contactbar from './components/Contactbar';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Projects from './pages/Projects';
import ServiceAreas from './pages/ServiceAreas';
import Servicesoffered from './pages/Servicesoffered';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contactbar/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/ServiceAreas" element={<ServiceAreas/>}/>
        <Route exact path="/Project" element={<Projects/>}/>
        <Route exact path="/ServicesOffered" element={<Servicesoffered/>}/>
        <Route exact path="/ContactUs" element={<Contactus/>}/>
        <Route exact path="/AboutUs" element={<Aboutus/>}/>
      </Routes>
    </div>
  );
}

export default App;
