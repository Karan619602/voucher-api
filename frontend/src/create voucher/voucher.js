import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Voucheraction,clearerrors } from '../action/Voucheraction'
export const Voucher=()=>{
    const {loading,code,error}=useSelector(state=>state.Vouchercode)
    const dispatch=useDispatch();
    useEffect(()=>{
      if(error){
        dispatch(clearerrors())
      }
    },[dispatch,error])
    const [data,setdata]=useState({
        category:'',
        type:'',
        percent_off:''
    })
const {category,type, percent_off}=data
    const submithandler=(e)=>{
        e.preventDefault();
      
        dispatch(Voucheraction(data))
        setdata({
            category:'',
            type:'',
            percent_off:''
        })
      console.log(code);
    }
    const onChange=(e)=>{
     
        setdata({...data,[e.target.name]:e.target.value})
    
    
        }
    return(
        <Fragment>
               <div className="row wrapper">
		<div className="col-10 col-lg-5">
   
        <form className="shadow-lg"  onSubmit={submithandler} >
            <h1 className="mb-3">form</h1>

          <div className="form-group">
            <label htmlFor="email_field">category  </label>
            <input type="name" id="name_field" className="form-control" 
             name='category'
              value={category}
               onChange={onChange}/>
          </div>

            <div className="form-group">
              <label htmlFor="email_field">type    </label>
              <input
                type="text"
                id="email_field"
                className="form-control"
                name='type'
              value={type}
               onChange={onChange}
                
              />
             
            </div>
  
             <div className="form-group">
              <label htmlFor="password_field"> percent  </label>
              <input
                type="number"
                id="password_field"
                className="form-control"
                name='percent_off'
              value={percent_off}
               onChange={onChange}
              />
            </div> 

          
  
            <button
              id="register_Link"
              type="submit"
              className="btn btn-block py-3"
               disabled={loading?true:false}
            >
              REGISTER
            </button>
        
          </form>
<h1>{code}</h1>
          
		  </div>
    </div>
        </Fragment>
    )

}