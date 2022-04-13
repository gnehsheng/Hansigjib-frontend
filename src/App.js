import { Route, Routes, BrowserRouter, Navigate, Outlet, useLocation } from 'react-router-dom';


import Navbar from './components/Navbar';
import AccountPage from './pages/Account';
import CartPage from './pages/Cart';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import { useContext, createContext } from 'react';

import { Header } from './components/Header';
import { AboutUs } from './components/AboutUs';
import './App.css'


import ProtectedRoute from './components/ProtectedRoutes';
import MenuPage from './pages/MenuPage';


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
      <BrowserRouter>
        <Navbar />
        {/* <Header />
        <AboutUs />
        <Menu /> */}
        <Routes>
          <Route path='/' element={<MainPage />} />
          {/* <Route path='/account' element={<PrivateRoutes />} > */}
            <Route path='/account' element={< AccountPage />} />
          {/* </Route> */}
          <Route path='/cart' element={<CartPage />} />
          <Route path='/menu' element={<MenuPage />} />
          
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
