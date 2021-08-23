import { CREATE_VOUCHER_REQUEST,CREATE_VOUCHER_SUCCESS,CREATE_VOUCHER_FAIL,CLEAR_ERRORS } from "../constants/constant";


export const Voucherreducer=(state={},action)=>{
  switch(action.type){

    case CREATE_VOUCHER_REQUEST:
        return{
            ...state,
            loading:true
        }
        case CREATE_VOUCHER_SUCCESS:
        return{
            ...state,
            loading:false,
            code:action.payload
        }

        case CREATE_VOUCHER_FAIL:
            return{
                ...state,
                loading:true,
                code:null,
                error:action.payload

            }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:action.payload
                }
            

       default:
        return state
  }
}