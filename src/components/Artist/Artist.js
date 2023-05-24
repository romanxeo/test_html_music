import classes from "./Artist.module.css";
import authorImg from "../../img/author.jpeg";
import calendarImg from "../../img/calendar.png";

const ARTIST_NAME = "Drake";

const ARTIST_STATISTIC = [
  {
    title: "All-time streams",
    info: "75+ Billion",
  },
  {
    title: "Total Revenues",
    info: "$432+ Million",
  },
];

const ARTIST_TOURS = [
  {
    data: "2/12",
    name: "BARCLAYS CENTER, BROOKLYN",
  },
  {
    data: "2/14",
    name: "MADISON SQUARE GARDE, NY",
  },
  {
    data: "2/17",
    name: "CAPITOL ONE ARENA, D.C",
  },
  {
    data: "2/20",
    name: "WELLS FARGO CENTER, PA",
  },
];

const Artist = () => {
  return (
    <div className={classes.artist_section}>
      <div className={classes.author_img}>
        <img src={authorImg} className={classes.img} alt="author"></img>
      </div>
      <div className={classes.artist_info}>
        <div className={classes.artist_info_header}>
          <p className={classes.artist_info_header__title}>Artist</p>
          <p className={classes.artist_info_header__name}>{ARTIST_NAME}</p>
          <hr />
        </div>
        <div className={classes.artist_info_statistic}>
          {ARTIST_STATISTIC.map((item) => (
            <div
              key={item.title}
              className={classes.artist_info_statistic__item}
            >
              <p className={classes.artist_info_statistic__title}>
                {item.title}
              </p>
              <p className={classes.artist_info_statistic__info}>{item.info}</p>
            </div>
          ))}
          <hr />
        </div>
        <div className={classes.artist_info_tours}>
          <p className={classes.artist_info_tours_title}>Upcoming tour dates</p>
          {ARTIST_TOURS.map((item) => (
            <div key={item.data} className={classes.artist_info_tours_tour}>
              <img
                src={calendarImg}
                className={classes.artist_info_tours_tour__img}
                alt=""
              ></img>
              <p>{item.data}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;
