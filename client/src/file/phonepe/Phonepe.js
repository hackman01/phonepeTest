import React, { useState } from 'react';

import './phonepe.css';
import axios from 'axios';
import phonepe from '../../image/phonepe.png'

const Phonepe = () => {
    const [loading2, setLoading2] = useState(false);
    // const API = 'https://phonepepgserver.onrender.com';
    const data ={
        name: 'Aman',
        amount: 1,
        number: '9999999999',
        MUID: "MUID" + Date.now(),
        transactionId: 'T' + Date.now(),
    }
 
    const handlePayment = async (e)=>{
        e.preventDefault();
        setLoading2(true);
        await axios.post('/api/payment', {...data}).then(res => {  
        setTimeout(() => {
            setLoading2(false);
        }, 1500);
        
        window.location.replace(res.data);
        
        })
        .catch(error => {
            setLoading2(false)
            console.error(error);
        });   
    }
  return (
    <>
    <div className='main'>
        <div className='center'>
            <img width={300} src={phonepe} alt="" />
            
        </div>
        <div className='card px-5 py-4 mt-5'>
            <form onSubmit={handlePayment}>
                <div className='col-12 '>
                    <p className='fs-5'><strong>Name:</strong> {data.name}</p>
                </div>
                <div className='col-12 '>   
                    <p className='fs-5'><strong>Number:</strong> {data.number}</p>
                </div>
                <div className='col-12 '>
                    <p className='fs-5'><strong>Amount:</strong> {data.amount}Rs</p>
                </div>
                {!loading2? <div className='col-12 center'>
                    <button className='w-100 ' type="submit">Pay Now</button>
                </div>
                :
                <div className='col-12 center'>
                    <button className='w-100 text-center' type="submit">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden ">Wait...</span>
                    </div>
                    </button>
                </div>
                }
            </form>
        </div>
    </div>
    
    
    </>
  )
}

export default Phonepe
