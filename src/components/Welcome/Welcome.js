import React from "react";
import classes from "./Welcome.module.css";
import loopImg from "../../img/loop.png";

const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <div className={classes.welcome_logo}>
        <img src={loopImg} alt="welcome-logo" />
      </div>
      <div className={classes.welcome_main}>
        <div className={classes.welcome_title}>
          <p>Welcome to loop!</p>
        </div>
        <div className={classes.welcome_form}>
          <p className={classes.welcome_form_title}>
            My name's MC. I'm your personal music concierge. Let me know what
            you'd like to do today, and i will point you in the right direction
          </p>
          <div className={classes.welcome_form_buttons_section}>
            <button>I have a single coming out soon</button>
            <button>I want to check on my social media growth</button>
            <p>or</p>
            <input placeholder="Type here..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
