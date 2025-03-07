import React from "react";
import Plot from "react-plotly.js";

const GlobalTimesChart = ({ timePeriod }) => {
  // Yearly Sentiment Data
  const yearlyData = {
    years: ["2009", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
    negative: [1, 0, 4, 3, 2, 3, 0, 1, 0],
    neutral: [0, 0, 1, 2, 1, 0, 2, 1, 1],
    positive: [2, 1, 1, 8, 10, 14, 6, 10, 6],
  };

  // Averaged Sentiment Data
  const avgData = {
    categories: ["Pre-2014", "Post-2014"],
    negative: [2.67, 1.20],
    neutral: [1.75, 1.00],
    positive: [4.00, 9.20],
  };

  // Select dataset based on active time period
  const isYearWise = timePeriod === "Year-wise";
  const data = isYearWise ? yearlyData : avgData;
  const yLabels = isYearWise ? [...data.years].reverse() : data.categories; // Reverse to match order

  return (
    <Plot
      data={[
        {
          type: "bar",
          x: isYearWise ? [...data.negative].reverse() : data.negative, // Ensure correct mapping
          y: yLabels,
          orientation: "h",
          marker: { color: "#FF9999" },
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
          marker: { color: "#99CCFF" },
          name: "Positive",
          text: isYearWise 
            ? [...data.positive].reverse().map((val, i) => `${yLabels[i]}: ${val}`) 
            : data.categories.map((_, i) => `${data.categories[i]}: ${data.positive[i]}`),
          textposition: "inside",
          hoverinfo: "none",
        },
      ]}
      layout={{
        barmode: "stack",
        showlegend: false,
        height: isYearWise ? 500 : 250,  // 🔥 Increased height
        width: "100%",  // 🔥 Make it take full width
        margin: { l: 100, r: 20, t: 20, b: 40 }, // 🔥 Adjusted margins for readability
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
        xaxis: { visible: true }, // 🔥 Keep X-axis visible for better scaling
        yaxis: {
          tickmode: "linear",  // Ensures all years are shown
          dtick: 1,            // Set interval to 1 year
          tickfont: { size: 12, color: "white" },
          automargin: true,
        },
        
      }}
      
      
      config={{ displayModeBar: false }}
    />
  );
};

export default GlobalTimesChart;
