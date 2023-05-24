import React from "react";
import classes from "./TourRevenue.module.css";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, Title } from "chart.js";
import { registerables } from "chart.js";

Chart.register(...registerables);
Chart.register(CategoryScale, LinearScale, Title);

const TourRevenue = () => {
  const data = [
    {
      count: 28233,
      count2: 18334,
      day: "S",
    },
    {
      count: 16343,
      count2: 20044,
      day: "M",
    },
    {
      count: 18343,
      count2: 16334,
      day: "T",
    },
    {
      count: 31223,
      count2: 28444,
      day: "W",
    },
    {
      count: 31444,
      count2: 23400,
      day: "T",
    },
    {
      count: 20003,
      count2: 9324,
      day: "F",
    },
    {
      count: 22948,
      count2: 18332,
      day: "S",
    },
  ];

  const days = data.map((item) => item.day);
  const tracks = data.map((item) => item.count);
  const video = data.map((item) => item.count2);

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          fontColor: "white",
          font: {
            size: 20,
            weight: "bold",
            family: "Bebas Neue",
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: function (value, index, values) {
            return value.toString().slice(0, 2) + "K";
          },
          fontColor: "#fff",
          font: {
            size: 20,
            weight: "bold",
            family: "Bebas Neue",
          },
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className={classes.tour_revenue}>
      <div>
        <p className={classes.tour_revenue_title}>TOUR REVENUE</p>
        <p className={classes.tour_revenue_subtitle}>$48 MILLION</p>
      </div>
      <div className={classes.chart_bar}>
        <Bar
          height={"250px"}
          data={{
            labels: days,
            datasets: [
              {
                label: "# count musics",
                data: tracks,
                backgroundColor: "#c8d4c9",
                borderRadius: 5,
                barPercentage: 0.2,
              },
              {
                label: "# count tracks",
                data: video,
                backgroundColor: "#75c142",
                borderRadius: 5,
                barPercentage: 0.2,
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default TourRevenue;
