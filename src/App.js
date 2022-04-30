import { React, useState } from 'react';
import './App.css';
import DashBoard from './common/DashBoard';
import Login from './common/Login';
import SideNav from './common/SideNav';
import { useSelector, useDispatch } from "react-redux";
import Loading from './common/Loading';

function App() {
  const Refresh = useSelector(state => state.Anona.Refresh);
  
  const [user] = useState({
    email:localStorage.getItem('email'),
    token:localStorage.getItem('token'),
  })

  return (
    <div className='App'>
    {Refresh?<Loading/>:null}
     <DashBoard/>
    </div>
  );
}

export default App;
