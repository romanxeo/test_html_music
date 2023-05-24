import React from "react";
import classes from "./Streams.module.css";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, Title } from "chart.js";
import { registerables } from "chart.js";
import "chartjs-plugin-annotation";

Chart.register(...registerables);
Chart.register(CategoryScale, LinearScale, Title);

const Streams = () => {
  const generateRandomData = (count) => {
    const data = [];
    const startDate = new Date("2023-02-20");
    for (let i = 0; i < count; i++) {
      const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      const streamCount = Math.floor(Math.random() * 1000) + 1; // Generate a random stream count between 1 and 1000
      data.push({
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        count: streamCount,
      });
    }
    return data;
  };

  const data = generateRandomData(5); // Generate data for 38 days from Feb 20 to Mar 29

  const labels = data.map((item) => item.date);
  const counts = data.map((item) => item.count);

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true, // Display x-axis grid lines
        },
      },
      y: {
        grid: {
          display: true, // Display x-axis grid lines
          color: "#2b2b2b",

          labels: false,
        },
        beginAtZero: true,
        // display: false,
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
        enabled: false, // Disable tooltip
      },
    },
    elements: {
      point: {
        radius: 2, // Set point radius to 0 to remove the points
      },
    },
  };

  const chartColors = {
    backgroundColor: "#bbe94a",
    borderColor: "#bbe94a",
    borderWidth: 2,
  };

  return (
    <div className={classes.streams}>
      <div className={classes.streams_header}>
        <p className={classes.streams_title}>Streams</p>
        <p className={classes.streams_subtitle}>450,210</p>
      </div>
      <div>
        <Line
          height={"250px"}
          data={{
            labels: labels,
            datasets: [
              {
                label: "Count",
                data: counts,
                backgroundColor: chartColors.backgroundColor,
                borderColor: chartColors.borderColor,
                borderWidth: chartColors.borderWidth,
                cubicInterpolationMode: "monotone",
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default Streams;
