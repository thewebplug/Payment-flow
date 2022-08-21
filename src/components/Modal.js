import { Button, FormControl, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'
const BillingModal = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="modal">
                <div className="modalHeader">
                    <h2>Item Name</h2>
                    <h2>₦ Price</h2>
                </div>
                <div className="modalBody">
                    <div className="modalContainer">
                        <div>
                            <h5>Data science and usability</h5>
                        </div>
                        <div>
                            <h5>50,000.00</h5>
                        </div>
                    </div>
                    <div className="modalContainer">
                        <div item xs={6}>
                            <h5>Shipping</h5>
                        </div>
                        <div item xs={6}>
                            <h5 className="blackText">0.00</h5>
                        </div>
                    </div>
                    <hr />
                    <div className="total">
                        <h5>Total</h5>
                        <h5>50,000.00</h5>
                    </div>
                </div>
            </div>
            <Grid container className="btnContainer">
                <Grid item xs={4}>
                    <FormControl
                        // className="formControl"
                        variant='outlined'
                    >
                        <Button variant="contained" className="button" onClick={() => navigate('/success')}>
                            <div className="buttonText">Pay</div>
                        </Button>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl
                        // className="formControl"
                        variant='outlined'
                    >
                        <Button variant="text"><h4>Cancel Payment</h4></Button>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    )

}


export default BillingModal;