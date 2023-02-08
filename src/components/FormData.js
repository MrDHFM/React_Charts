import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const [xaxis, setXaxis] = useState("");
  const [yaxis, setYaxis] = useState("");

  const navigate = useNavigate();

  const xChange = (e) => {
    setXaxis(e.target.value);
  };

  const yChange = (e) => {
    setYaxis(e.target.value);
  };

  const clickLineChart = (e) => {
    e.preventDefault();
    navigate("/linechart", {
      state: {
        xaxis,
        yaxis,
      },
    });
  };

  const clickBarChart = (e) => {
    e.preventDefault();
    navigate("/barchart", {
      state: {
        xaxis,
        yaxis,
      },
    });
  };

  const clickPieChart = (e) => {
    e.preventDefault();
    navigate("/doughnutchart", {
      state: {
        xaxis,
        yaxis,
      },
    });
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <button
        style={{
          padding: "10px",
          backgroundColor: "orange",
          border: "1.5px solid black",
          borderRadius: "20px",
        }}
        type="button"
        onClick={clickLineChart}
      >
        Line Chart
      </button>
      <button
        style={{
          padding: "10px",
          backgroundColor: "orange",
          border: "1.5px solid black",
          borderRadius: "20px",
        }}
        type="button"
        onClick={clickBarChart}
      >
        Bar Chart
      </button>
      <button
        style={{
          padding: "10px",
          backgroundColor: "orange",
          border: "1.5px solid black",
          borderRadius: "20px",
        }}
        type="button"
        onClick={clickPieChart}
      >
        Doughnut Chart
      </button>
    </div>
  );
};

export default FormData;
