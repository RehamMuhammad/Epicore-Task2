import { Grid } from "@material-ui/core";
import React from "react";
import "./css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <Grid container className="logo">
        <Grid item className="logo-item" xs={2}></Grid>
        <Grid item className="logo-item" sm={3} xs={12}>
          <div className="outer-circle">
            <div className="inner-circle"> </div>
            <h2 className="offer">OfferDose</h2>
          </div>
        </Grid>
        <Grid item className="logo-item" xs={4}></Grid>

        <Grid item className="logo-item" sm={3} xs={12}>
          <ul>
            <li className="active">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </nav>
  );
}

export default Navbar;
