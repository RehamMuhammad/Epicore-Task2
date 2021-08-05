import { Grid } from '@material-ui/core';
import React from 'react';
import './css/Features.css';

function Features() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
            <h1 className="dashboard">
                Dashboard Features
            </h1><br/>
            </Grid>
            </Grid>
            <Grid container >
            <Grid item xs={1}></Grid>
                <Grid item sm={2} xs={12} className="feature-item">
                <div className="features-Square">
                <div className="features-circle"> </div>
                </div>
                <h3 className="center">Account Managment</h3>
                <p className="center">
                Lorem Ipsum is simply<br/>
                dummy text of the printing<br/>
                and typesetting industry.<br/>
                Lorem Ipsum has been the<br/>
                industry's standard dummy
                </p>
                </Grid>
                <Grid item sm={2} xs={12} className="feature-item">
                <div className="features-Square">
                <div className="features-circle"> </div>
                </div>
                <h3 className="center">Add Coupon</h3>
                <p className="center">
                Lorem Ipsum is simply<br/>
                dummy text of the printing<br/>
                and typesetting industry.<br/>
                Lorem Ipsum has been the<br/>
                industry's standard dummy
                </p>
                </Grid>
                <Grid item sm={2} xs={12} className="feature-item">
                <div className="features-Square">
                <div className="features-circle"> </div>
                </div>
                <h3 className="center">Add Menu</h3>
                <p className="center">
                Lorem Ipsum is simply<br/>
                dummy text of the printing<br/>
                and typesetting industry.<br/>
                Lorem Ipsum has been the<br/>
                industry's standard dummy
                </p>
                </Grid>
                <Grid item sm={2} xs={12} className="feature-item">
                <div className="features-Square">
                <div className="features-circle"> </div>
                </div>
                <h3 className="center">Data Analytics</h3>
                <p className="center">
                Lorem Ipsum is simply<br/>
                dummy text of the printing<br/>
                and typesetting industry.<br/>
                Lorem Ipsum has been the<br/>
                industry's standard dummy
                </p>
                </Grid>
                <Grid item sm={2} xs={12} className="feature-item">
                <div className="features-Square">
                <div className="features-circle"> </div>
                </div>
                <h3 >Payment</h3>
                <p >
                Lorem Ipsum is simply<br/>
                dummy text of the printing<br/>
                and typesetting industry.<br/>
                Lorem Ipsum has been the<br/>
                industry's standard dummy
                </p>
                </Grid>
                <Grid item xs={1}></Grid>


            </Grid>
        </div>
    )
}

export default Features;
