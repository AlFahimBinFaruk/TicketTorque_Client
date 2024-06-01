import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PurchaseHistory from './pages/PurchaseHistory';
import Tickets from './pages/Tickets';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tickets' element={<Tickets/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/history' element={<PurchaseHistory/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>



        </Routes>
        
       
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
