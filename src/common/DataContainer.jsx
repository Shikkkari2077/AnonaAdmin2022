import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DashboardHome from '../components/DashboardHome';
import UserLogs from '../components/UserLogs';


const DataContainer = () => {
  return (
       <div className='DataContainer'>
           <ToastContainer/>
           {/* <Loading/> */}
            <Routes>
                <Route exact path='/' element={<DashboardHome />}/>
                <Route exact path='/logs' element={<UserLogs />}/>
            </Routes>
       </div>
  )
}

export default DataContainer