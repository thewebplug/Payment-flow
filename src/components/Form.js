import React, { useState } from 'react';
import { Tab, Tabs, Box, FormControl, OutlinedInput, Grid, Select, MenuItem, Button } from '@mui/material'
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
import PaymentSuccess from './PaymentSuccess';
import BillingModal from './Modal';
import CardPayment from './CardPayment';




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <h1>{children}</h1>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Form = () => {
    const states = [
        "Abia", "Adamawa", "AkwaIbom", "Anambra", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
    ]


    const [value, setValue] = useState(0)

    const [state, setState] = useState('Lagos');

    const { pathname } = useLocation();

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setValue(1)
    }

    return (
        <div className="form">

            {pathname === '/success' ? (
                <PaymentSuccess />
            ) :
                (
                    <>
                        <h1>Complete your purchase</h1>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs
                                    value={value} onChange={handleChange}
                                    aria-label="basic tabs example"
                                    TabIndicatorProps={{
                                        style: {
                                            backgroundColor: "#D97D54",
                                            color: "#D97D54",
                                            height: "4px",
                                            borderRadius: "10px"
                                        }
                                    }}
                                >
                                    <Tab
                                        label="Personal Info" {...a11yProps(0)}
                                        className={value === 0 ? "tabPanel tabCurrent" : 'tabPanel'}
                                    />
                                    <Tab
                                        label="Billing Info" {...a11yProps(1)}
                                        className={value === 1 ? "tabPanel tabCurrent" : 'tabPanel'}
                                        disabled={value === 0}
                                    />
                                    <Tab
                                        label="Confirm Payment" {...a11yProps(2)}
                                        className={value === 2 ? "tabPanel tabCurrent" : 'tabPanel'}
                                        disabled
                                    />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <form onSubmit={handleSubmit}>
                                    <FormControl
                                        className="formControl"
                                        variant='outlined'
                                    >
                                        <label for="name">
                                            <h2>Name</h2>
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
                                            <h2>Email Address<span className="redText">*</span></h2>
                                            <h3>The purchase reciept would be sent to this address</h3>
                                        </label>
                                        <OutlinedInput
                                            id='emailAddress'
                                            type='email'
                                            required
                                            className="inputField"
                                            placeholder="OparaLinusAhmed@devmail.com"
                                        />
                                    </FormControl>
                                    <FormControl
                                        className="formControl"
                                        variant='outlined'
                                    >
                                        <label for="address1">
                                            <h2>Address 1</h2>
                                        </label>
                                        <OutlinedInput
                                            id='address1'
                                            type='text'
                                            required
                                            className="inputField"
                                            placeholder="The address of the user goes here"
                                        />
                                    </FormControl>
                                    <FormControl
                                        className="formControl"
                                        variant='outlined'
                                    >
                                        <label for="name">
                                            <h2>Address 2</h2>
                                        </label>
                                        <OutlinedInput
                                            id='address2'
                                            type='text'
                                            required
                                            className="inputField"
                                            placeholder="and here"
                                        />
                                    </FormControl>
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                            <FormControl
                                                className="formControl"
                                                variant='outlined'
                                            >
                                                <label for="localgovernemnt">
                                                    <h2>Local Government</h2>
                                                </label>
                                                <OutlinedInput
                                                    id='localgovernemnt'
                                                    type='text'
                                                    required
                                                    className="inputField"
                                                    placeholder="Enter Local Government"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControl
                                                className="formControl"
                                                variant='outlined'
                                            >
                                                <label for="state">
                                                    <h2>State</h2>
                                                </label>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={state}
                                                    className="inputField"
                                                    onChange={handleStateChange}
                                                    required
                                                >
                                                    {
                                                        states.map((state) =>
                                                            <MenuItem value={state}>{state}</MenuItem>
                                                        )
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container className="btnContainer">
                                        <Grid item xs={4}>
                                            <FormControl
                                                variant='outlined'
                                            >
                                                <Button variant="contained" className="button" type="submit">
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
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {pathname === '/modal' ? (
                                    <BillingModal />
                                ) : (
                                    <CardPayment />
                                )}
                            </TabPanel>
                            <TabPanel value={value} index={2}>

                            </TabPanel>
                        </Box >
                    </>
                )}
        </div >
    )
}

export default Form;