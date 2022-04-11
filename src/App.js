import { Route, Routes, BrowserRouter, Navigate, Outlet, useLocation } from 'react-router-dom';

import './style.css'
import Navbar from './components/Navbar';
import AccountPage from './pages/Account';
import CartPage from './pages/Cart';
import MainPage from './pages/Main';
import MenuPage from './pages/Menu';
import LoginPage from './pages/Login';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import { useContext, createContext } from 'react';

// import ProtectedRoute from './components/ProtectedRoutes';

function App() {

  const PrivateRoutes = () => {

    const globalC = createContext()
    const location = useLocation();
    const { authLogin } = useContext(globalC);
    console.log("authLogin", authLogin);

    return authLogin
      ? <Outlet />
      : <Navigate to="/login" replace state={{ from: location }} />;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/' element={<PrivateRoutes />} >
            <Route path='/account' element={< AccountPage />} />
          </Route>
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
