
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
import { Route, Routes, BrowserRouter, Navigate, Outlet, useOutletContext, useLocation } from 'react-router-dom';


import { CartProvider } from 'react-use-cart'
import { MenuPage2 } from './pages/MenuPage2';
// import './App.css'


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
          <Route path='/menu' element={<MenuPage2 />} />
          
           {/* Private Routes */}
       <Route element={<RequireAuth/>}>
          <Route path='/account' element={< AccountPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
