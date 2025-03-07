import React from "react";
import Plot from "react-plotly.js";

const SentinnelChart = ({ timePeriod }) => {
  // Yearly Sentiment Data
  const yearlyData = {
    years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    negative: [19, 48, 12, 16, 24, 12, 17, 34, 36, 3],
    neutral: [0, 18, 14, 0, 2, 1, 3, 0, 2, 0],
    positive: [34, 66, 66, 70, 50, 52, 87, 74, 162, 17],
    veryPositive: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  };

  // Averaged Sentiment Data
  const avgData = {
    categories: ["Pre-2014", "Post-2014"],
    negative: [null, 20.4], // No data for Pre-2014
    neutral: [null, 1.2], // No data for Pre-2014
    positive: [null, 78.2], // No data for Pre-2014
    veryPositive: [null, 0.2], // No data for Pre-2014
  };

  // Choose dataset based on time period selection
  const isYearWise = timePeriod === "Year-wise";
  const data = isYearWise ? yearlyData : avgData;
  const yLabels = isYearWise ? [...data.years].reverse() : data.categories; // Reverse for year-wise

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
        },
        {
          type: "bar",
          x: isYearWise ? [...data.neutral].reverse() : data.neutral,
          y: yLabels,
          orientation: "h",
          marker: { color: "#B0B0B0" },
          name: "Neutral",
        },
        {
          type: "bar",
          x: isYearWise ? [...data.positive].reverse() : data.positive,
          y: yLabels,
          orientation: "h",
          marker: { color: "#4CAF50" },
          name: "Positive",
        },
        {
          type: "bar",
          x: isYearWise ? [...data.veryPositive].reverse() : data.veryPositive,
          y: yLabels,
          orientation: "h",
          marker: { color: "#66FF66" },
          name: "Very Positive",
        },
      ]}
      layout={{
        barmode: "stack",
        showlegend: true,
        height: isYearWise ? 600 : 300,
        width: 600,
        margin: { l: 100, r: 20, t: 20, b: 20 },
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
        annotations: isYearWise
          ? [] // No annotation for Year-wise
          : [
              {
                x: 0,
                y: "Pre-2014",
                text: "No articles available",
                showarrow: false,
                font: { color: "white", size: 14, family: "Arial" },
                xanchor: "left",
              },
            ],
      }}
      config={{ displayModeBar: false }}
    />
  );
};

export default SentinnelChart;
