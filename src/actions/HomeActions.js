import {
  SET_REPORT_DATA,
  SET_EMAIL_LOGS,
  SET_SMS_LOGS,
} from './Types'

import Constant from '../Constant'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import axios from 'axios';

const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };


export const onLogin = (data) => (dispatch)=>{
axios
    .post(Constant.getAPI() + `/system/sign-in`,data)
    .then((res) => {
       if(res.data){
            toast.success("User Logged In Successfully!", {
                position: toast.POSITION.TOP_RIGHT
            });

            localStorage.setItem('token',res.data.token)
            localStorage.setItem('userName',res.data.data.userName)
            localStorage.setItem('email',res.data.data.email)

            window.location.reload()
       }
    })
    .catch((err) => {
        toast.error("User ID or Password is Wrong", {
            position: toast.POSITION.TOP_RIGHT
        });
    });
};


export const GetMealsReport = (data) => (dispatch)=>{

    axios
      .get(Constant.getAPI() + `/productionReport/report?date=${data}`, data)
      .then((res) => {
            if(res.data){
                dispatch({
                    type:SET_REPORT_DATA,
                    payload:res.data.data
                })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const GetUserEmailLOGS = (data) => (dispatch)=>{

    axios
      .get(Constant.getAPI() + `/productMaster/get-logs/email?date=${data}`, data)
      .then((res) => {
            if(res.data){
                dispatch({
                    type:SET_EMAIL_LOGS,
                    payload:res.data.data
                })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const GetUserSMSLOGS = (data) => (dispatch)=>{

    axios
      .get(Constant.getAPI() + `/productMaster/get-logs/sms?date=${data}`, data)
      .then((res) => {
            if(res.data){
                dispatch({
                    type:SET_SMS_LOGS,
                    payload:res.data.data
                })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

