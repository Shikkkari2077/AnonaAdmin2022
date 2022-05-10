import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ControlPanel from '../components/ControlPanel';
import DashboardHome from '../components/DashboardHome';
import DeliveryLogs from '../components/DeliveryLogs';
import DriverLogs from '../components/DriverLogs';
import UserLogs from '../components/UserLogs';


const DataContainer = () => {
  return (
       <div className='DataContainer'>
           <ToastContainer/>
            <Routes>
                <Route exact path='/' element={<DashboardHome />}/>
                <Route exact path='/logs' element={<UserLogs />}/>
                <Route exact path='/controlPanel' element={<ControlPanel />}/>
                <Route exact path='/driverLogs' element={<DriverLogs />}/>
                <Route exact path='/deliveryDetails' element={<DeliveryLogs />}/>
            </Routes>
       </div>
  )
}

export default DataContainer