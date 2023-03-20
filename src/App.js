import './App.css';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Footer from './component/Footer';
import {Routes, Route} from 'react-router-dom';
import Service from './component/Service';
import About from './component/About';
import Hero from './component/Hero';
import Analytics from './component/Analytics';
import Newsletter from './component/Newsletter';
import Cards from './component/Cards';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div><Navbar/><Hero/><Analytics/><Newsletter/><Cards/><Footer/></div>}/>
        <Route path='about' element={<div><Navbar/><About/><Footer/></div>}/>
        <Route path='/contact' element={<div><Navbar/><Contact/><Footer/></div>}/>
        <Route path='service' element={<div><Navbar/><Service/><Footer/></div>}/>
      </Routes>
    </div>
  );
}

export default App;
