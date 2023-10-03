import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const {dispatch } = useContext(AppContext);
      const changeCurrency = (val)=>{
              dispatch({
                  type: 'CHG_CURRENCY',
                  payload: val,
              })
      }
      
    return (
          <div className='alert alert-secondary' background-color="green"> Currency {
        <select name="Currency" id="Currency" background-color="blue" onChange={event=>changeCurrency(event.target.value)}>
          <option value="£" color="green">£ Pound</option>
          <option value="₹" color="green">₹ Rupee</option>
          <option value="€" color="green">€ Euro</option>
          <option value="$" color="green">$ Dollar</option>
        </select>	
        }	
      </div>
      );
  };


export default Currency;