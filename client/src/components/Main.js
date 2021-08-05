import { Grid } from '@material-ui/core';
import React from 'react';
import Create from './Create';
import './css/Main.css';

function Main() {
    return (
        <main>
            <Grid container className="login-form">
                
                <Grid item className="login-item" sm={6} xs={12}>
                    <Create/>
                </Grid>

                <Grid item className="login-item" sm={6} xs={12}>
                <div className="outer-Square">
                <div className="circle"> </div>
                </div>
                </Grid>
                
            </Grid>
        </main>
    )
}

export default Main;
