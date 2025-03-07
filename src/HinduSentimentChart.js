import React from "react";
import Plot from "react-plotly.js";

const HinduSentimentChart = ({ timePeriod }) => {
  // Yearly Sentiment Data for The Hindu
  const yearlyData = {
    years: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    negative: [0, 1, 0, 0, 2, 0, 1, 0, 5, 2, 1, 2],
    neutral: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    positive: [2, 3, 4, 4, 6, 5, 3, 1, 7, 12, 17, 6],
    veryPositive: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  // Averaged Sentiment Data for The Hindu
  const avgData = {
    categories: ["Pre-2014", "Post-2014"],
    negative: [0.6, 2.2],
    neutral: [0, 0.2],
    positive: [3.8, 7.2],
    veryPositive: [0, 0],
  };

  // Select dataset based on active time period
  const isYearWise = timePeriod === "Year-wise";
  const data = isYearWise ? yearlyData : avgData;
  const yLabels = isYearWise ? [...data.years].reverse() : data.categories; // Reverse order for visualization

  return (
    <Plot
      data={[
        {
          type: "bar",
          x: isYearWise ? [...data.negative].reverse() : data.negative,
          y: yLabels,
          orientation: "h",
          marker: { color: "#FF4D4D" },
          name: "Negative",
          text: isYearWise
            ? [...data.negative].reverse().map((val, i) => `${yLabels[i]}: ${val}`)
            : data.categories.map((_, i) => `${data.categories[i]}: ${data.negative[i]}`),
          textposition: "inside",
          hoverinfo: "none",
        },
        {
          type: "bar",
          x: isYearWise ? [...data.neutral].reverse() : data.neutral,
          y: yLabels,
          orientation: "h",
          marker: { color: "#B0B0B0" },
          name: "Neutral",
          text: isYearWise
            ? [...data.neutral].reverse().map((val, i) => `${yLabels[i]}: ${val}`)
            : data.categories.map((_, i) => `${data.categories[i]}: ${data.neutral[i]}`),
          textposition: "inside",
          hoverinfo: "none",
        },
        {
          type: "bar",
          x: isYearWise ? [...data.positive].reverse() : data.positive,
          y: yLabels,
          orientation: "h",
          marker: { color: "#4CAF50" },
          name: "Positive",
          text: isYearWise
            ? [...data.positive].reverse().map((val, i) => `${yLabels[i]}: ${val}`)
            : data.categories.map((_, i) => `${data.categories[i]}: ${data.positive[i]}`),
          textposition: "inside",
          hoverinfo: "none",
        },
        {
          type: "bar",
          x: isYearWise ? [...data.veryPositive].reverse() : data.veryPositive,
          y: yLabels,
          orientation: "h",
          marker: { color: "#66FF66" },
          name: "Very Positive",
          text: isYearWise
            ? [...data.veryPositive].reverse().map((val, i) => `${yLabels[i]}: ${val}`)
            : data.categories.map((_, i) => `${data.categories[i]}: ${data.veryPositive[i]}`),
          textposition: "inside",
          hoverinfo: "none",
        },
      ]}
      layout={{
        title: "The Hindu Sentiment Analysis",
        barmode: "stack",
        showlegend: true,
        height: isYearWise ? 600 : 300,
        width: 600,
        margin: { l: 120, r: 20, t: 40, b: 20 },
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
        xaxis: { visible: false },
        yaxis: {
          tickmode: "array",
          tickvals: yLabels,
          tickfont: { size: 14, color: "white" },
          automargin: true,
        },
        bargap: 0.15,
      }}
      config={{ displayModeBar: false }}
    />
  );
};

export default HinduSentimentChart;
