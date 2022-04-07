import { Route, Routes, BrowserRouter } from 'react-router-dom';

import 'purecss/build/pure.css'
import './style.css'
import Navbar from './components/Navbar';
import AccountPage from './pages/Account';
import CartPage from './pages/Cart';
import MainPage from './pages/Main';
import MenuPage from './pages/Menu';
import LoginPage from './pages/SignUpLogin';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar /> 
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/user' element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
