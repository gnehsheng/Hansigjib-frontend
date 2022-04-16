
import RequireAuth from './components/RequireAuth';
import React from "react"
import Navbar from './components/Navbar';
import AccountPage from './pages/Account';
import CartPage from './pages/Cart';
import { MainPage } from './pages/Main';
import LoginPage from './pages/Login';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';

import { useContext, createContext } from 'react';
<<<<<<< HEAD
import ProtectedRoute from './components/ProtectedRoutes';
=======
import { Route, Routes, BrowserRouter, Navigate, Outlet, useOutletContext, useLocation } from 'react-router-dom';

>>>>>>> wxuanh

import { CartProvider } from 'react-use-cart'
import { MenuPage2 } from './pages/MenuPage2';
// import './App.css'


<<<<<<< HEAD
function App() {

  // const PrivateRoutes = () => {

  //   const globalC = createContext()
  //   const location = useLocation();
  //   const { authLogin } = useContext(globalC);

  //   console.log("authLogin", authLogin);

  //   return authLogin ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />;
  // }

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<MainPage />} />
            {/* <Route path='/account' element={<PrivateRoutes />} > */}
            <Route path='/account' element={< AccountPage />} />
            {/* </Route> */}
            <Route path='/cart' element={<CartPage />} />
            <Route path='/menu' element={<MenuPage2 />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
=======
import ProtectedRoutes from './components/ProtectedRoutes';
import AuthContext from './context/AuthProvider';
import {useCookies} from "react-cookie"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Header />
        <AboutUs />
        <Menu /> */}
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<MainPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/menu' element={<Menu />} />
          
           {/* Private Routes */}
       <Route element={<RequireAuth/>}>
          <Route path='/account' element={< AccountPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
>>>>>>> wxuanh
    </>
  );
}

export default App;
