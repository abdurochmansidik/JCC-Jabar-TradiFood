import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/partial/navbar';
import Home from './components/pages/home';
import Footer from './components/partial/footer';
import Menu from './components/pages/menu';
import Login from './components/pages/login';
import Register from './components/pages/register';
import DetailProduk from './components/pages/detailProduk';
import Cart from './components/pages/cart';
import User from './components/pages/user';
import Admin from './components/pages/admin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:id' element={<DetailProduk />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart/*' element={<Cart />} />
        <Route path='/user' element={<User />} />
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;