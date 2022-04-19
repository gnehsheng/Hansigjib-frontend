
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from 'react-use-cart';
import RequireAuth from './components/RequireAuth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountPage from './pages/Account';
import CartPage from './pages/Cart';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import SignUp from './pages/SignUp';
import MenuPage from './pages/MenuPage';
import OrderConfirmation from "./pages/OrderConfirmation";
import './App.css'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<MainPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/transaction/' element={<OrderConfirmation />} />

            {/* Private Routes */}
            <Route element={<RequireAuth />}>
              <Route path='/account' element={< AccountPage />} />
              
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
