
import './App.css';
import Navbar from './component/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop';
import ShopCatagory from './pages/ShopCatagory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LogeinSinup from './pages/LogeinSinup';
import Footer from './component/Footer/Footer';
import men_banner from './component/Assets/banner_mens.png'
import women_banner from './component/Assets/banner_women.png'
import kid_banner from './component/Assets/banner_kids.png'



function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatagory banner={men_banner} category="mens"/>}/>
        <Route path='/womens' element={<ShopCatagory banner ={women_banner} category="womens"/>}/>
        <Route path='/kids' element={<ShopCatagory banner={kid_banner} category="kids"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LogeinSinup/>}/>  
       </Routes>
       <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
