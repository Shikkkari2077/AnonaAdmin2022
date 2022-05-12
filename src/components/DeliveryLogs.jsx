import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import MUIDataTable from "mui-datatables";
import { toast } from 'react-toastify'
import { GetDELIVERY_Logs } from '../actions/HomeActions';

const DeliveryLogs = () => {

  const dispatch = useDispatch()
  const DeliveryLogs = useSelector((state)=>state.Anona.DeliveryLogs)

  const [date, setDate] = useState('')
  const [LOGS_DATA, setLOGS_DATA] = useState(false)

  const OnSearch =()=>{
    if(date){
        var data = {
            date:date
        }
      dispatch(GetDELIVERY_Logs(data))
    }else{
      toast.warning("Please Select A Date!", {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  }

  useEffect(() => {
   if(DeliveryLogs){
      setLOGS_DATA(DeliveryLogs)
   }
  }, [DeliveryLogs])
  
  
  console.log('DeliveryLogs',DeliveryLogs);

  const columns = [
    
   
    {
        name: "CUSTOMER NAME",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Customer Name</span>
          }
        },
      },
      {
        name: "ORDER ID",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Order ID</span>
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
      }
    },
    {
      name: "DAY",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Day</span>
        }
      }
    },
    {
      name: "STATUS",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Status</span>
        }
      }
    },
    {
        name: "TIME",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Time</span>
          }
        }
      },
      {
        name: "Preffered time slot",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Preffered Time Slot</span>
          }
        }
      },
      {
        name: "DELIVERY",
        options: {
          filter: true,
          sort: true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Delivery</span>
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
            <Link to='/logs'><span class="material-icons-outlined">delivery_dining</span>Delivery Details</Link>/
            <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
        </span>
        </div>
        <div className="Header">
          <h2><span class="material-icons-outlined">delivery_dining</span>Delivery Details</h2>
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

export default DeliveryLogs;
