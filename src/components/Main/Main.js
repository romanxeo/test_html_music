import classes from "./Main.module.css";
import Artist from "../Artist/Artist";
import Welcome from "../Welcome/Welcome";
import TourRevenue from "../TourRevenue/TourRevenue";
import Listener from "../Listener/Listener";
import Streams from "../Streams/Streams";

const Main = () => {
  return (
    <div className={classes.main_section}>
      <div className={classes.main}>
        <Artist />
        <div className={classes.additional}>
          <div className={classes.additional_top}>
            <Welcome />
            <TourRevenue />
          </div>
          <div className={classes.additional_bottom}>
            <Listener />
            <Streams />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
