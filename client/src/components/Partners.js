import { Grid } from '@material-ui/core';
import React from 'react';
import './css/Partners.css';


function Partners() {
    return (
        <div className="partner square-shapes">
            <Grid container >
                <Grid item xs={12}>
                    <h1 className="partners">Partners</h1>
                </Grid>
                </Grid>

                {/* The Six parts of the Partner Section are identical */ }
                
                <Grid container>
                <Grid item className="square-shape" sm={2} xs={12} >
                <div className="partners-Square">
                <div className="partners-circle"> </div>
                </div>
                </Grid>
                <Grid item className="square-shape" sm={2} xs={12}>
                <div className="partners-Square">
                <div className="partners-circle"> </div>
                </div>
                </Grid>
                <Grid item className="square-shape" sm={2} xs={12}>
                <div className="partners-Square">
                <div className="partners-circle"> </div>
                </div>
                </Grid>
                <Grid item className="square-shape" sm={2} xs={12}>
                <div className="partners-Square">
                <div className="partners-circle"> </div>
                </div>
                </Grid>
                <Grid item className="square-shape" sm={2} xs={12}>
                <div className="partners-Square">
                <div className="partners-circle"> </div>
                </div>
                </Grid>
                <Grid item className="square-shape" sm={2} xs={12}>
                <div className="partners-Square">
                <div className="partners-circle"> </div>
                </div>
                </Grid>
            </Grid>
            
        </div>
    )
};

export default Partners;
