import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menubar from './components/Menubar/Menubar';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivateRouteProfile from './components/PrivateRouteProfile/PrivateRouteProfile';
import Profile from './components/Profile/Profile';
import User from './components/User/User';
import Order from './components/Order/Order';
import Product from './components/Product/Product';
import NotFound from './components/NotFound/NotFound';
import Messages from './components/Messages/Messages';

function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
        <Route path="/login" element={<PrivateRoute><Login></Login></PrivateRoute>}>

        </Route>

        <Route path='/user' element={<User></User>}>

        </Route>

        <Route path='/order' element={<Order></Order>}>

        </Route>
        <Route path='/product' element={<Product></Product>}>
          
        </Route>

        <Route path="message" element={<Messages></Messages>}></Route>

        <Route path='/profile' element={<PrivateRouteProfile><Profile></Profile></PrivateRouteProfile>}> </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

      
      </Routes>

    </div>
  );
}

export default App;
