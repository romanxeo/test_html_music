import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, Title } from "chart.js";
import { registerables } from "chart.js";
import classes from "./Listener.module.css";

Chart.register(...registerables);
Chart.register(CategoryScale, LinearScale, Title);

const Listener = () => {
  const data = [
    {
      country: "USA",
      percent: 47,
      color: "rgba(222,11,56,0.8)", // Red color
    },
    {
      country: "Europe",
      percent: 32,
      color: "rgba(54, 162, 235, 0.8)", // Blue color
    },
    {
      country: "Asia",
      percent: 12,
      color: "rgba(255, 206, 86, 0.8)", // Yellow color
    },
    {
      country: "South America",
      percent: 9,
      color: "rgba(75, 192, 192, 0.8)", // Green color
    },
  ];

  const countries = data.map((item) => item.country);
  const percents = data.map((item) => item.percent);
  const colors = data.map((item) => item.color);

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className={classes.listener}>
      <div>
        <p className={classes.listener_title}>LISTENER GEOGRAPHY</p>
      </div>
      <div className={classes.doughnut}>
        <Doughnut
          height={"150px"}
          data={{
            labels: countries,
            datasets: [
              {
                label: "Percentage",
                data: percents,
                backgroundColor: colors,
                borderRadius: 20,
                borderColor: colors,
                cutout: "90%",
                spacing: 5,
                hoverBackgroundColor: [
                  "rgba(255, 255, 255, 0.8)",
                  "rgba(255, 255, 255, 0.8)",
                  "rgba(255, 255, 255, 0.8)",
                ], // Добавлен цвет свечения при наведении
                hoverBorderWidth: 10,
              },
            ],
          }}
          options={options}
        />
        <div className={classes.light_butt}></div>
      </div>
      <div style={{ color: "white" }}>
        {data.map((item) => (
          <div key={item.country}>
            <span style={{ color: item.color }}>&#9679;</span> {item.country} -{" "}
            {item.percent}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listener;
