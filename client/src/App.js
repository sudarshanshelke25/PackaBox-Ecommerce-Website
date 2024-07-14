import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Forgot from './auth/Forgot';
import PageNotFound from './pages/PageNotFound';
import Account from './auth/Account';
import PrivateRoute from './components/Routes/Private';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/cart" element={<Home />} /> */}
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
