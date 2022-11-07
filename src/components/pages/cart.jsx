import { Routes, Route } from "react-router-dom";
import NavbarCart from "../partial/navbarCart";
import CartBelanja from "../partial/cartBelanja";
import CartTagihan from "../partial/cartTagihan";
import CartPesanan from "../partial/cartPesanan";


const Cart = () => {
    return (
        <div>
            <NavbarCart />
            <Routes>
            <Route path='/' element={<CartBelanja />} />
            <Route path='/carttagihan' element={<CartTagihan />} />
            <Route path='/cartpesanan' element={<CartPesanan />} />
            </Routes>
        </div>
    )
}

export default Cart;