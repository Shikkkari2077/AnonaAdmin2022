import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import MUIDataTable from "mui-datatables";
import { toast } from 'react-toastify'
import { GetUserEmailLOGS, GetUserSMSLOGS } from '../actions/HomeActions';

const UserLogs = () => {

  const dispatch = useDispatch()
  const EmailLOGS = useSelector((state)=>state.Anona.EmailLOGS)
  const SMSLOGS = useSelector((state)=>state.Anona.SMSLOGS)

  const [date, setDate] = useState('')
  const [Channel, setChannel] = useState('email')
  const [LOGS_DATA, setLOGS_DATA] = useState(false)

  useEffect(() => {
    if(date&&Channel=='email'){
      dispatch(GetUserEmailLOGS(date))
    }else if(date&&Channel=='sms'){
      dispatch(GetUserSMSLOGS(date))
    }
  }, [date,Channel])

  useEffect(() => {
   if(EmailLOGS){
      setLOGS_DATA(EmailLOGS)
   }else if(SMSLOGS){
      setLOGS_DATA(SMSLOGS)
   }
  }, [EmailLOGS, SMSLOGS])
  
  
  console.log('EmailLOGS',EmailLOGS);

  const columns = [
    
    {
      name: "order_master_id",
      options: {
        filter: true,
        sort: true,
        customBodyRender:(order_master_id)=>{
          return <b>{order_master_id}</b>
        },
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Order ID</span>
        }
      },
    },
    {
      name: "channel",
      options: {
        filter: true,
        sort: true,
        customBodyRender:(channel)=>{
          return <p style={{textTransform:'capitalize'}}>{channel}</p>
        },
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Channel</span>
        }
      }
    },
    {
        name: "name",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Name</span>
          }
        },
      },
      {
        name: "email",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>E-Mail</span>
          }
        }
      },
      {
        name: "user_mobile",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Mobile</span>
          }
        }
      },
      {
        name: "createdAt",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Created At</span>
          }
        }
      },
      {
        name: "communication_type",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Communication Type</span>
          }
        }
      },
    
    
  ];

  
  const options = {
      filterType: "dropdown",
      search:false,
      filter:false,
      viewColumns: false,
      print: false,
      pagination:true,
      download: false,
      selectableRows: "none",
  };

  return (
    <div>
        <div className="breadcrumb">
        <span>
            <Link to='/logs'><span class="material-icons-outlined">dvr</span>User Logs</Link>/
            <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
        </span>
        </div>
        <div className="Header">
          <h2><span class="material-icons-outlined">dvr</span>User Logs</h2>
          <div>
            <select className='Channel' value={Channel} onChange={(e)=>setChannel(e.target.value)} id="">
              <option value="email">Email</option>
              <option value="sms">SMS</option>
            </select>
            <input value={date} onChange={(e)=>setDate(e.target.value)} className='DateInput' type="date" />
          </div>
        </div>

        <MUIDataTable
          className="table-responsive"
          data={LOGS_DATA?LOGS_DATA:[]}
          columns={columns}
          options={options}
        />
    
    </div>
  );
};

export default UserLogs;
