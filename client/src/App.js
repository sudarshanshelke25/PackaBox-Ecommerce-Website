import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Forgot from './auth/Forgot';
import PageNotFound from './pages/PageNotFound';
import PrivateRoute from './components/Routes/PrivateRoute';

import Account from './pages/account/Account';
import Profile from './pages/account/Profile';
import Orders from './pages/account/Orders';
import Address from './pages/account/Address';
import Wishlist from './pages/account/Wishlist';
import Payment from './pages/account/Payment';
import Reviews from './pages/account/Reviews';
import ContactUs from './pages/account/ContactUs';
import Settings from './pages/account/Settings';
import AdminRoute from './components/Routes/AdminRoute';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/cart" element={<Home />} /> */}
        <Route path="/forgot" element={<Forgot />} />

        {/* Account Route */}
        <Route path="/account" element={<PrivateRoute />}>
          <Route path="" element={<Account />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="address" element={<Address />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="payments" element={<Payment />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Admin Route */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="dashboard" element={<Account />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="address" element={<Address />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="payments" element={<Payment />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
