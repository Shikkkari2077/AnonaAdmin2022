import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import MUIDataTable from "mui-datatables";
import { toast } from 'react-toastify'
import { GetDRIVER_Logs } from '../actions/HomeActions';

const DriverLogs = () => {

  const dispatch = useDispatch()
  const DriverLogs = useSelector((state)=>state.Anona.DriverLogs)

  const [date, setDate] = useState('')
  const [LOGS_DATA, setLOGS_DATA] = useState(false)

  const OnSearch =()=>{
    if(date){
        var data = {
            date:date
        }
      dispatch(GetDRIVER_Logs(data))
    }else{
      toast.warning("Please Select A Date!", {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  }

  useEffect(() => {
   if(DriverLogs){
      setLOGS_DATA(DriverLogs)
   }
  }, [DriverLogs])
  
  
  console.log('DriverLogs',DriverLogs);

  const columns = [
    
    {
      name: "DRIVER NAME",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Driver Name</span>
        }
      },
    },
    {
        name: "DATE",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Date</span>
          }
        },
      },
    {
      name: "DRIVING TIME",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Driving Time</span>
        }
      }
    },
    {
        name: "FIRST DELIVERY TIME",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>First Delivery Time</span>
          }
        }
      },
      {
        name: "LAST DELIVERY TIME",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Last Delivery Time</span>
          }
        }
      },
      {
        name: "TOTAL DELIVERY",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Total Delivery</span>
          }
        }
      },
      {
        name: "COMPLETED DELIVERY",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Completed Delivery</span>
          }
        }
      },
      {
        name: "Total Late Delivery",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Total Late Delivery</span>
          }
        }
      },
      
      {
        name: "Total On time",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Total On Time</span>
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
            <Link to='/logs'><span class="material-icons-outlined">local_shipping</span>Driver Logs</Link>/
            <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
        </span>
        </div>
        <div className="Header">
          <h2><span class="material-icons-outlined">local_shipping</span>Driver Logs</h2>
          <div className='INPUTS'>
            <input value={date} onChange={(e)=>setDate(e.target.value)} className='DateInput' type="date" />
            <button onClick={OnSearch}><span class="material-icons-outlined">search</span></button>
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

export default DriverLogs;
