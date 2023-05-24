import classes from "./Navigation.module.css";
import logo from "../../img/dry-clean (2).png";
import window from "../../img/window-of-four-rounded-squares.png";
import statistic from "../../img/statistics (1).png";
import pie from "../../img/pie-chart.png";
import wallet from "../../img/wallet.png";
import chat from "../../img/chat.png";
import user from "../../img/user.png";
import addition from "../../img/addition.png";
import exit from "../../img/exit.png";

const Navigation = () => {
  return (
    <nav className={classes.app_nav}>
      <div className={classes.head_nav_section}>
        <img src={logo} className={classes.logo_img} alt="logo" />
        <div className={classes.menu}>
          <img src={window} alt=""/>
          <img src={statistic} alt=""/>
          <img src={pie} alt=""/>
          <img src={wallet} alt=""/>
          <img src={chat} alt=""/>
          <img src={user} alt=""/>
        </div>
      </div>
      <div className={classes.menu_second}>
        <img src={addition} alt=""/>
        <img src={exit} alt=""/>
      </div>
    </nav>
  );
};

export default Navigation;
