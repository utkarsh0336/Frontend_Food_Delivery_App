import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderImg from './components/HeaderImg';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/cart' element={<Cart/>} /> 
        < Route path='/order' element={<PlaceOrder/>} /> 
      </Routes>
      <HeaderImg/>

    </div>
  );
}

export default App;
