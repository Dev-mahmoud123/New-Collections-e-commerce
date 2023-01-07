import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Cart from './components/Cart';
import Home from './components/Home';
import NavbarComponent from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
     <NavbarComponent/>
     <ToastContainer/>
      <Routes>
         <Route exact path='/' element= <Home/>/>
         <Route exact path='/products' element=<Products/> />
         <Route exact path='/products/:id' element=<Product/> />
         <Route exact path='/cart' element=<Cart/> />
      </Routes>
    </div>
  );
}

export default App;
