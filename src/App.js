import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layouts from './components/Layouts';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShoppingPokicy from './pages/ShoppingPokicy';
import TermsAndConditions from './pages/TermsAndConditions';
import SingleProduct from './pages/SingleProduct';
import CheckOut from './pages/CheckOut';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Ecommeerce' element={<Layouts />}>
            <Route path='/Ecommeerce' index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='store' element={<OurStore />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='blog/:id' element={<SingleBlog />} />
            <Route path='compare-product' element={<CompareProduct />} />
            <Route path='wsihlist' element={<Wishlist />} />
            <Route path='login' element={<Login />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<CheckOut />} />
            <Route path='forgot-password' element={<Forgotpassword />} />
            <Route path='signup' element={<Signup />} />
            <Route path='reset-password' element={<Resetpassword />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='refund-policy' element={<RefundPolicy />} />
            <Route path='shopping-pokicy' element={<ShoppingPokicy />} />
            <Route path='terms-conditions' element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App; 
