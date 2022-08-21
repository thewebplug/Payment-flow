import { Button, FormControl, Grid, MenuItem, OutlinedInput, Select } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const CardPayment = () => {

    const [cvv, setCvv] = useState('923');
    const [cardType, setCardType] = useState('Visa');
    const [cardDetails, setCardDetails] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const handleCardDetailsChange = (e) => {
        if (e.target.value.length % 6 === 0) {
            setCardDetails(`${e.target.value} `)
        } else {
            setCardDetails(e.target.value)
        }
    }
    const handleExpiryDateChange = (e) => {
        console.log(e.target.value[e.target.value.length - 1])
        // if (e.target.value.length === 5) {
        //     setExpiryDate(`${e.target.value}  `)
        //     // setCount(false)
        // }
        if (e.target.value.length % 2 === 0 || e.target.value[e.target.value.length - 1] === '/') {
            setExpiryDate(`${e.target.value}  `)
            // setCount(true)
        } else {
            setExpiryDate(e.target.value)
            // setCount(false)
        }
    }


    const navigate = useNavigate()

    return (
        <form>
            <FormControl
                className="formControl"
                variant='outlined'
            >
                <label for="name">
                    <h2>Name on Card<span className="redText">*</span></h2>
                </label>
                <OutlinedInput
                    id='name'
                    type='text'
                    required
                    className="inputField"
                    placeholder="Opara Linus Ahmed"
                />
            </FormControl>
            <FormControl
                className="formControl"
                variant='outlined'
            >
                <label for="emailAddress">
                    <h2>Card Type<span className="redText">*</span></h2>
                </label>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cardType}
                    className="inputField"
                    onChange={(e) => setCardType(e.target.value)}
                    required
                >
                    <MenuItem selected value="Visa">Visa</MenuItem>
                    <MenuItem value="Master Card">Master Card</MenuItem>
                    <MenuItem value="Verve">Verve</MenuItem>

                </Select>
            </FormControl>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <FormControl
                        className="formControl"
                        variant='outlined'
                    >
                        <label for="address1">
                            <h2>Card Details</h2>
                        </label>
                        <OutlinedInput
                            id='address1'
                            type='text'
                            value={cardDetails}
                            required
                            className="inputField"
                            placeholder="44960 44960 44960 44960"
                            onChange={handleCardDetailsChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl
                        className="formControl"
                        variant='outlined'
                    >
                        <label for="name">
                            <h2>Expiry Date<span className="redText">*</span></h2>
                        </label>
                        <OutlinedInput
                            id='address2'
                            type='text'
                            value={expiryDate}
                            required
                            className="inputField"
                            placeholder="04 / 23"
                            onChange={handleExpiryDateChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl
                        className="formControl"
                        variant='outlined'
                    >
                        <label for="name">
                            <h2>CVV<span className="redText">*</span></h2>
                        </label>
                        <OutlinedInput
                            id='address2'
                            type='text'
                            value={cvv}
                            required
                            className="inputField"
                            onChange={(e) => {
                                setCvv(e.target.value)
                            }}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <br />
            <Grid container className="btnContainer">
                <Grid item xs={4}>
                    <FormControl
                        variant='outlined'
                    >
                        <Button variant="contained" className="button" onClick={() => navigate('/modal')}>
                            <div className="buttonText">Next</div>
                        </Button>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl
                        variant='outlined'
                    >
                        <Button variant="text"><h4>Cancel Payment</h4></Button>
                    </FormControl>
                </Grid>
            </Grid>
        </form>
    )

}


export default CardPayment;