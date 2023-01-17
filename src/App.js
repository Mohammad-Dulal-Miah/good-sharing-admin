import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menubar from './components/Menubar/Menubar';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivateRouteProfile from './components/PrivateRouteProfile/PrivateRouteProfile';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
        <Route path="/login" element={<PrivateRoute><Login></Login></PrivateRoute>}>

        </Route>

        <Route path='/profile' element={<PrivateRouteProfile><Profile></Profile></PrivateRouteProfile>}>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
