import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Menu from './pages/Menu';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import Users from './pages/dashbord/Users';
import Meal from './pages/dashbord/Meal';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile.jsx';
import Reservations from './pages/Reservations';
import EmailPage from './pages/verifyEmailpage/EmailPage';
import RvsDash from './pages/dashbord/RvsDash';

function App() {
  const { user } = useSelector((state) => state.auth);
  return (

    <BrowserRouter>
    <div className="App" dir='ltr'>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Menu' element={<Menu/>}/>
<Route path='/profile' element={user?<Profile/> : <Navigate to="/" /> }/>
<Route path='/reservations' element={user?<Reservations/> : <Navigate to="/" /> }/>
<Route path='/register'  element={ <RegisterPage />}/>
<Route path='/RvsDash'  element={ <RvsDash />}/>
<Route path='/user/:id/verify/:token'  element={!user?<EmailPage/> :<Navigate to="/" />}/>
<Route path='/login'  element={<LoginPage />} />
<Route path='/users' element={user?.isAdmin? <Users/> : <Navigate to="/" />}/>
<Route path='/meal' element={user?.isAdmin? <Meal/> : <Navigate to="/" />}/>
</Routes>
    </div>    
    </BrowserRouter>
  );
}

export default App;
