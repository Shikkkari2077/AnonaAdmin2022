import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { GetALL_STATUS,
     changeMain_STATUS,
     changeReceipt_STATUS,
     changeDays_STATUS,
     changeWeekly_STATUS,
     changeMonthly_STATUS,
     changeEmail_STATUS,
     changeSMS_STATUS,
} from '../actions/HomeActions';

const ControlPanel = () => {
    const dispatch = useDispatch()
    const AllStatus = useSelector((state)=>state.Anona.ALL_STATUS)

    useEffect(() => {
      dispatch(GetALL_STATUS())
    }, [])
    
    const MainStatusChnage = () => {
        if(AllStatus.currentState === 'ON'){
            var data = {
                toggle:false
            }
            dispatch(changeMain_STATUS(data))
        }else{
            var data = {
                toggle:true
            }
            dispatch(changeMain_STATUS(data))
        }
    }

    const EmailStatusChnage = () => {
        if(AllStatus.emailState === 'ON'){
            var data = {
                toggle:false
            }
            dispatch(changeEmail_STATUS(data))
        }else{
            var data = {
                toggle:true
            }
            dispatch(changeEmail_STATUS(data))
        }
    }

    const SmsStatusChnage = () => {
        if(AllStatus.smsState === 'ON'){
            var data = {
                toggle:false
            }
            dispatch(changeSMS_STATUS(data))
        }else{
            var data = {
                toggle:true
            }
            dispatch(changeSMS_STATUS(data))
        }
    }

    const ReceiptStatusChnage = () => {
        var data = {}
         dispatch(changeReceipt_STATUS(data))
    }

    const DaysStatusChnage = () => {
        var data = {}
         dispatch(changeDays_STATUS(data))
    }

    const WeeklyStatusChnage = () => {
        var data = {}
         dispatch(changeWeekly_STATUS(data))
    }

    const MonthlyStatusChnage = () => {
        var data = {}
         dispatch(changeMonthly_STATUS(data))
    }

    console.log('AllStatus',AllStatus);
  return (
    <div>
         <div className="breadcrumb">
        <span>
            <Link to='/controlPanel'><span class="material-icons-outlined">settings</span>Control Panel</Link>/
            <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
        </span>
        </div>
        <div className="Header">
          <h2><span class="material-icons-outlined">settings</span>Status Control Panel</h2>
         
        </div>
        <div class="container">
        
        <div class="switch-holder">
            <div class="switch-label">
                <span class="material-icons-outlined">dns</span><span>Main Status</span>
            </div>
            <div class="switch-toggle">
                <input onClick={MainStatusChnage} type="checkbox" id="Main" checked={AllStatus.currentState=='ON'?true:false} />
                <label for="Main"></label>
            </div>
        </div>

        <div class="switch-holder">
            <div class="switch-label">
                <span class="material-icons-outlined">receipt</span><span>Receipt Status</span>
            </div>
            <div class="switch-toggle">
                <input onClick={ReceiptStatusChnage} type="checkbox" id="Receipt" checked={AllStatus.recieptState=='ON'?true:false}/>
                <label for="Receipt"></label>
            </div>
        </div>

        <div class="switch-holder">
            <div class="switch-label">
                <span class="material-icons-outlined">email</span><span>Email Status</span>
            </div>
            <div class="switch-toggle">
                <input  onClick={EmailStatusChnage} type="checkbox" id="Email" checked={AllStatus.emailState=='ON'?true:false}/>
                <label for="Email"></label>
            </div>
        </div>

        <div class="switch-holder">
            <div class="switch-label">
                <span class="material-icons-outlined">sms</span><span>SMS Status</span>
            </div>
            <div class="switch-toggle">
                <input  onClick={SmsStatusChnage} type="checkbox" id="SMS" checked={AllStatus.smsState=='ON'?true:false}/>
                <label for="SMS"></label>
            </div>
        </div>

        <div class="switch-holder">
            <div class="switch-label">
                <span class="material-icons-outlined">today</span><span>Days Status</span>
            </div>
            <div class="switch-toggle">
                <input onClick={DaysStatusChnage} type="checkbox" id="Days" checked={AllStatus.daysState=='ON'?true:false}/>
                <label for="Days"></label>
            </div>
        </div>

        <div class="switch-holder">
            <div class="switch-label">
                <span class="material-icons-outlined">view_week</span><span>Weekly Status</span>
            </div>
            <div class="switch-toggle">
                <input onClick={WeeklyStatusChnage} type="checkbox" id="Weekly" checked={AllStatus.weeklyState=='ON'?true:false}/>
                <label for="Weekly"></label>
            </div>
        </div>

        <div class="switch-holder">
            <div class="switch-label">
                <span class="material-icons-outlined">calendar_month</span><span>Monthly Status</span>
            </div>
            <div class="switch-toggle">
                <input onClick={MonthlyStatusChnage} type="checkbox" id="Monthly" checked={AllStatus.monthlyState=='ON'?true:false}/>
                <label for="Monthly"></label>
            </div>
        </div>

    </div>
    </div>
  )
}

export default ControlPanel