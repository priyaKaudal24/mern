import axios from "axios";
import {
  GET_ERRORS,
  SAVE_TRANSACTION,
  GET_TRANSACTION
} from "./types";
//var api = "http://localhost:8080";
export const saveTransaction = allData => dispatch => {

  axios
    .post(`http://localhost:5000/save`, allData)
    .then(res => {
      dispatch({
        type: 'SAVE_TRANSACTION',
        payload: res.data
      })
       })
    .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.res
      })
    );
};
export const getTransactions = allData => dispatch => {
  axios
    .get(`http://localhost:5000/all-transaction`, allData)
    .then(res => {
       dispatch({
        type: 'GET_TRANSACTION',
        payload: res.data
      })
       })
    .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.res
      })
    );
};

