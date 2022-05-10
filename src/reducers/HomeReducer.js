import {
  SET_REPORT_DATA,
  SET_EMAIL_LOGS,
  SET_SMS_LOGS,
  SET_STATUS_DATA,
  SET_REFRESH,
  SET_DELIVERY_LOGS,
  SET_DRIVER_LOGS,
} from '../actions/Types'
  
  const initialState = {
    ReportData: false,
    EmailLOGS: false,
    SMSLOGS: false,
    ALL_STATUS: false,
    Refresh:false,
    DriverLogs:false,
    DeliveryLogs:false,
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_REPORT_DATA:
        return {
          ...state,
          ReportData: action.payload,
        };
      case SET_EMAIL_LOGS:
        return {
          ...state,
          EmailLOGS: action.payload,
        };
      case SET_SMS_LOGS:
        return {
          ...state,
          SMSLOGS: action.payload,
        };
      case SET_REFRESH:
        return {
          ...state,
          Refresh: action.payload,
        };
      case SET_STATUS_DATA:
        return {
          ...state,
          ALL_STATUS: action.payload,
        };
      case SET_DRIVER_LOGS:
        return {
          ...state,
          DriverLogs: action.payload,
        };
      case SET_DELIVERY_LOGS:
        return {
          ...state,
          DeliveryLogs: action.payload,
        };
      default:
              return state;
    }
  };
  
  export default homeReducer;
  