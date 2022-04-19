import { React, useState } from 'react';
import './App.css';
import DashBoard from './common/DashBoard';
import Login from './common/Login';
import SideNav from './common/SideNav';


function App() {
  
  const [user] = useState({
    email:localStorage.getItem('email'),
    token:localStorage.getItem('token'),
  })

  return (
    <div className='App'>
     <DashBoard/>
    </div>
  );
}

export default App;
