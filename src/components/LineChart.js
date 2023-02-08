import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "April", "May"],
    datasets: [
      {
        label: "Sales 2020 (M)",
        data: [3, 2, 2, 1, 5],
        borderColor: ["rgba(153, 102, 255, 1)"],
        backgroundColor: ["rgba(153, 102, 255, 1)"],
        pointBackgroundColor: "rgba(153, 102, 255, 1)",
        pointBorderColor: "rgba(153, 102, 255, 1)",
      },
      {
        label: "Sales 2019 (M)",
        data: [1, 3, 2, 2, 3],
        borderColor: ["rgba(255, 99, 132, 1)"],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart",
      },
    },
  };

  return (
    <div
      style={{
        height: "800px",
        width: "800px",
      }}
    >
      <Line
        style={{ marginLeft: "200px", marginTop: "100px" }}
        data={data}
        options={options}
      />
    </div>
  );
}

export default LineChart;
