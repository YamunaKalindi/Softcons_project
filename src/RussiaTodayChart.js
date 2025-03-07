import React from "react";
import Plot from "react-plotly.js";

const RussiaTodayChart = ({ timePeriod }) => {
  // Yearly Sentiment Data (Updated)
  const yearlyData = {
    years: ["2007", "2010", "2011", "2012", "2013", "2015", "2016", "2018", "2019", "2020", "2021", "2023", "2024", "2025"],
    negative: [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    neutral: [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    positive: [1, 1, 1, 1, 5, 3, 1, 1, 6, 3, 1, 3, 9, 1],
    veryNegative: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  // Averaged Sentiment Data (Updated)
  const avgData = {
    categories: ["Pre-2014", "Post-2014"],
    negative: [2 / 7, 2 / 9], // Avg of negatives
    neutral: [0, 2 / 9],      // Avg of neutrals
    positive: [10 / 7, 25 / 9], // Avg of positives
    veryNegative: [0, 1 / 9], // Avg of very negatives
  };

  const isYearWise = timePeriod === "Year-wise";
  const yLabels = isYearWise ? [...yearlyData.years].reverse() : avgData.categories;

  return (
    <Plot
      data={[
        // Actual Sentiment Data
        ...["veryNegative", "negative", "neutral", "positive"].map((sentiment, index) => ({
          type: "bar",
          x: isYearWise ? [...yearlyData[sentiment]].reverse() : avgData[sentiment],
          y: yLabels,
          orientation: "h",
          marker: { color: ["#D60000", "#FF4D4D", "#B0B0B0", "#4CAF50"][index] },
          name: sentiment.charAt(0).toUpperCase() + sentiment.slice(1),
          text: isYearWise
            ? [...yearlyData[sentiment]].reverse().map((val, i) => `${yLabels[i]}: ${val}`)
            : avgData.categories.map((_, i) => `${avgData.categories[i]}: ${avgData[sentiment][i].toFixed(2)}`),
          textposition: "inside",
          hoverinfo: "none",
        })),
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
      }}
      config={{ displayModeBar: false }}
    />
  );
};

export default RussiaTodayChart;
