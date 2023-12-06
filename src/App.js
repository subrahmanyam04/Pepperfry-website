

import { Routes,Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Findstudio from './pages/Findstudio';
import { AddShoppingCart } from '@mui/icons-material';
import './App.css';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Furniturtab from './components/Furnituretab';
import Tabscontent from './components/Tabscontent';
import Products from './components/Products';

function App() {
  return (
    <div>
       <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/findstudio' element={<Findstudio/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/tabscontent/:catagoery' element={<Tabscontent/>}></Route>
        <Route path='/products/:catagoery/:details/:id'exact element={ <Products/> }></Route>

       
      </Routes>
    </div>
  );
}

export default App;
