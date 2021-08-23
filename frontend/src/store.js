import {  combineReducers ,applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Voucherreducer } from './reducer/voucherreducer';

const reducer=combineReducers({
Vouchercode :Voucherreducer
})



let initialState={

}



const middleware=[thunk]
const store= createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;