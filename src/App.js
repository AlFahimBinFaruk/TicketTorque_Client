import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderDetails from './pages/OrderDetails';
import TicketList from './pages/TicketList';
import MyOrderList from './pages/MyOrderList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ticket-list/:vehicle_id/:from_location_id/:to_location_id' element={<TicketList/>}/>
          <Route path='/my-order-list' element={<MyOrderList/>}/>

          <Route path='/order-details' element={<OrderDetails/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>



        </Routes>
        
       
      </div>
      </BrowserRouter>
      
      <ToastContainer/>
    </div>
  );
}

export default App;
