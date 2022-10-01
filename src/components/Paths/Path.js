import { Route, Routes } from "react-router-dom";
import LandingPage from '../Landing/LandingPage'
import Product from "../Product/Product";
import Blog from "../Blog/Blog";
import AboutUs from "../About Us/AboutUs";
import Plant from "../ProductDetails/Plant";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import OrderHistory from "../Order History/OrderHistory";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

function Path() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/product/plant" element={<Plant/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/orderhistory" element={<OrderHistory/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
    </div>
  )
}

export default Path
