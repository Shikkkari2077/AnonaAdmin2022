import {
  SET_REPORT_DATA,
  SET_EMAIL_LOGS,
  SET_SMS_LOGS,
  SET_STATUS_DATA,
  SET_REFRESH,
  SET_DELIVERY_LOGS,
  SET_DRIVER_LOGS,
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
  dispatch({
    type:SET_REFRESH,
    payload:true
  })

    axios
      .get(Constant.getAPI() + `/productionReport/report?date=${data}`)
      .then((res) => {
                dispatch({
                  type:SET_REPORT_DATA,
                  payload:res.data
              })
            if(res.data.data.length>0){
                toast.success("Reports Fetched Successfully!", {
                  position: toast.POSITION.TOP_RIGHT
              });
        
                dispatch({
                  type:SET_REFRESH,
                  payload:false
                })
            }else{
              toast.error("No Records Found Sorry!", {
                position: toast.POSITION.TOP_RIGHT
              });

              dispatch({
                type:SET_REFRESH,
                payload:false
              })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const GetUserEmailLOGS = (data) => (dispatch)=>{
    dispatch({
      type:SET_REFRESH,
      payload:true
    })
    axios
      .get(Constant.getAPI() + `/productMaster/get-logs/email?date=${data}`)
      .then((res) => {
           console.log('res.data.data',res.data.data)
            if(res.data.data.length>0){
                toast.success("Emails Fetched Successfully!", {
                  position: toast.POSITION.TOP_RIGHT
                });

                dispatch({
                    type:SET_EMAIL_LOGS,
                    payload:res.data.data
                })
                dispatch({
                  type:SET_REFRESH,
                  payload:false
                })
            }else{
              toast.error("No Records Found Sorry!", {
                position: toast.POSITION.TOP_RIGHT
              });

              dispatch({
                type:SET_REFRESH,
                payload:false
              })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const GetUserSMSLOGS = (data) => (dispatch)=>{
    dispatch({
      type:SET_REFRESH,
      payload:true
    })
    axios
      .get(Constant.getAPI() + `/productMaster/get-logs/sms?date=${data}`)
      .then((res) => {
      
            if(res.data.data.length>0){
              toast.success("SMS Fetched Successfully!", {
                position: toast.POSITION.TOP_RIGHT
              });
                dispatch({
                    type:SET_SMS_LOGS,
                    payload:res.data.data
                })
                dispatch({
                  type:SET_REFRESH,
                  payload:false
                })
            }else{
              toast.error("No Records Found Sorry!", {
                position: toast.POSITION.TOP_RIGHT
              });

              dispatch({
                type:SET_REFRESH,
                payload:false
              })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const GetDRIVER_Logs = (data) => (dispatch)=>{
    dispatch({
      type:SET_REFRESH,
      payload:true
    })
  
      axios
        .post(Constant.getAPI() + `/productionReport/driverLogs`,data)
        .then((res) => {
                  dispatch({
                    type:SET_DRIVER_LOGS,
                    payload:res.data.data
                })
              if(res.data.data.length>0){
                  toast.success("Driver Logs Fetched Successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                });
          
                  dispatch({
                    type:SET_REFRESH,
                    payload:false
                  })
              }else{
                toast.error("No Records Found Sorry!", {
                  position: toast.POSITION.TOP_RIGHT
                });
  
                dispatch({
                  type:SET_REFRESH,
                  payload:false
                })
              }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    export const GetDELIVERY_Logs = (data) => (dispatch)=>{
      dispatch({
        type:SET_REFRESH,
        payload:true
      })
    
        axios
          .post(Constant.getAPI() + `/productionReport/deliveryDetails`,data)
          .then((res) => {
                    dispatch({
                      type:SET_DELIVERY_LOGS,
                      payload:res.data.data
                  })
                if(res.data.data.length>0){
                    toast.success("Delivery Details Fetched Successfully!", {
                      position: toast.POSITION.TOP_RIGHT
                  });
            
                    dispatch({
                      type:SET_REFRESH,
                      payload:false
                    })
                }else{
                  toast.error("No Records Found Sorry!", {
                    position: toast.POSITION.TOP_RIGHT
                  });
    
                  dispatch({
                    type:SET_REFRESH,
                    payload:false
                  })
                }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    
  export const GetALL_STATUS = (data) => (dispatch)=>{

    axios
      .get(Constant.getAPI() + `/switches/get-status`)
      .then((res) => {
            if(res.data){
                dispatch({
                    type:SET_STATUS_DATA,
                    payload:res.data
                })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const changeMain_STATUS = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/switches/main-timer-toggle`,data)
      .then((res) => {
            if(res.data){
              toast.success("Main Status Changed Successfully!", {
                position: toast.POSITION.TOP_RIGHT
              });
              dispatch(GetALL_STATUS())
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const changeEmail_STATUS = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/switches/email-toggle`,data)
      .then((res) => {
            if(res.data){
              toast.success("Email Status Changed Successfully!", {
                position: toast.POSITION.TOP_RIGHT
              });
              dispatch(GetALL_STATUS())
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const changeSMS_STATUS = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/switches/sms-toggle`,data)
      .then((res) => {
            if(res.data){
              toast.success("SMS Status Changed Successfully!", {
                position: toast.POSITION.TOP_RIGHT
              });
              dispatch(GetALL_STATUS())
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const changeReceipt_STATUS = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/switches/type-toggle/reciept`,data)
      .then((res) => {
            if(res.data){
              toast.success("Receipt Status Changed Successfully!", {
                position: toast.POSITION.TOP_RIGHT
              });
              dispatch(GetALL_STATUS())
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const changeDays_STATUS = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/switches/type-toggle/days`,data)
      .then((res) => {
            if(res.data){
              toast.success("Days Status Changed Successfully!", {
                position: toast.POSITION.TOP_RIGHT
              });
              dispatch(GetALL_STATUS())
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const changeWeekly_STATUS = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/switches/type-toggle/weekly`,data)
      .then((res) => {
            if(res.data){
              toast.success("Weekly Status Changed Successfully!", {
                position: toast.POSITION.TOP_RIGHT
              });
              dispatch(GetALL_STATUS())
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const changeMonthly_STATUS = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/switches/type-toggle/monthly`,data)
      .then((res) => {
            if(res.data){
              toast.success("Monthly Status Changed Successfully!", {
                position: toast.POSITION.TOP_RIGHT
              });
              dispatch(GetALL_STATUS())
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


