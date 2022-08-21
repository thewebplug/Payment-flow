import { Button, FormControl } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'
const PaymentSuccess = () => {

    const navigate = useNavigate()


    return (
        <div className="paymentSuccess">
            <div className="paymentSuccessInner">
                <div className="paymentSuccessImage">
                    <img src="../Vector.png" width="25" height="20" alt="green tick" />
                </div>
                <h1 className="paymentSuccessText">Purchase Completed</h1>
                <h5>Please check your email for details concerning
                    this transaction</h5>

                <FormControl
                    variant='outlined'
                >
                    <Button variant="text" onClick={() => navigate('/')}><div className="return">Return Home</div></Button>
                </FormControl>
            </div>
        </div>
    )

}


export default PaymentSuccess;