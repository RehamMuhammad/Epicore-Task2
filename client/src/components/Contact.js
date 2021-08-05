import { Grid } from "@material-ui/core";
import React from "react";
import "./css/Contact.css";
import { ImInstagram, ImTwitter, ImFacebook } from "react-icons/im";
import { IconContext } from "react-icons";

function Contact() {
  return (
    <footer className="contact-container">
      <Grid container>
        <Grid item xs={12}>
          <h1 className="foot">Contact Us</h1>
        </Grid>
      </Grid>

      <Grid container >
        {/* Part#1 of 3  */}
        <Grid item xs={1}></Grid>
        <Grid item sm={3} xs={12} className="contact-item">
          <h3>+092 538748 225</h3>
          <h3>Vienna - Graz - Cairo</h3>
          <h3>follow us</h3>
          <ul>
            <IconContext.Provider
              value={{ size: "20px", color: "white", className: "social" }}
            >
              <li className="social-list">
                <a href="https://www.instagram.com/">
                  <ImInstagram />
                </a>
              </li>
              <li className="social-list">
                <a href="https://twitter.com/">
                  <ImTwitter />
                </a>
              </li>
              <a href="https://www.facebook.com/">
                <li className="social-list">
                  <ImFacebook />
                </li>
              </a>
            </IconContext.Provider>
          </ul>
        </Grid>

        {/* Part#2 of 3  */}
        <Grid item sm={4} xs={12} className="contact-item">
          <h3>Services you're interested in.</h3>
          <h3>See more offers.</h3>
          <h3>FAQ</h3>
        </Grid>

        {/* Part#3 of 3  */}
        <Grid item sm={3} xs={12} className="contact-item">
          <h3>Ask Us any Question!</h3>
          <h4>
            Subscribe to know our latest offers.
            <br />
            write your Email here to subscribe.
          </h4>
          <form>
            <input type="email" placeholder="Enter your email here" />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </form>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </footer>
  );
}

export default Contact;
