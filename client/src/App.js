import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import store from './redux/store/Store.js'
import { Provider } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import About from './pages/aboutus/About';
import Footer from './components/footer/Footer';
import { Home } from '../src/pages/home/Home';
import Policy from './components/policy/Policy';

function App() {
  return (    
    <>
    <Provider store={store}>   
      <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/Policies" element={<Policy/>}/>
      <Route  path="/about" element={<About/>}/>
      {/* <Route  path="/contact" element={<Contact/>}/> */}
      <Route  path="/login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </Router>
    </Provider>

      
  
    </>
  );
}
   
export default App;