import { CREATE_VOUCHER_REQUEST,CREATE_VOUCHER_SUCCESS,CREATE_VOUCHER_FAIL,CLEAR_ERRORS } from "../constants/constant";

import axios from 'axios'

export const Voucheraction=(formdata)=>async(dispatch)=>{
    try {
        dispatch({type:CREATE_VOUCHER_REQUEST})

        const {data}= await axios.post('http://localhost:4000/code',formdata)
        dispatch({
            type:CREATE_VOUCHER_SUCCESS,
            payload:data
        })

    } catch (error) {
          dispatch({
            type:CREATE_VOUCHER_FAIL
        })
    }
}

export const clearerrors=()=>async (dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}