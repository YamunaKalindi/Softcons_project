import React from "react";
import Plot from "react-plotly.js";

const MumbaiMirrorChart = ({ timePeriod }) => {
  // Year-wise Sentiment Data
  const yearlyData = {
    years: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
    negative: [26, 30, 63, 56, 47, 31, 4],
    neutral: [1, 0, 0, 0, 0, 1, 0],
    positive: [73, 85, 169, 236, 253, 120, 13],
    veryPositive: [0, 0, 0, 0, 0, 0, 0],
  };

  // Pre-2014 Sentiment Data
  const pre2014Data = {
    years: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"],
    negative: [1, 5, 9, 12, 11, 9, 4, 7],
    neutral: [0, 0, 1, 0, 1, 1, 0, 0],
    positive: [6, 19, 19, 33, 23, 22, 14, 28],
    veryPositive: [0, 0, 0, 1, 0, 0, 0, 0],
  };

  // Average Sentiment Data (Pre-2014 vs. Post-2014)
  const avgData = {
    categories: ["Pre-2014", "Post-2014"],
    negative: [8, 36.71],  // Average negatives
    neutral: [0.5, 0.33],  // Average neutrals
    positive: [20.5, 135.57],  // Average positives
    veryPositive: [0.125, 0],  // Average very positives
  };

  const isYearWise = timePeriod === "Year-wise";
  const yLabels = isYearWise
    ? [...pre2014Data.years, ...yearlyData.years].reverse()
    : avgData.categories;

  return (
    <Plot
      data={[
        // Sentiment Data
        ...["negative", "neutral", "positive", "veryPositive"].map((sentiment, index) => ({
          type: "bar",
          x: isYearWise
            ? [...pre2014Data[sentiment], ...yearlyData[sentiment]].reverse()
            : avgData[sentiment],
          y: yLabels,
          orientation: "h",
          marker: { color: ["#FF4D4D", "#B0B0B0", "#4CAF50", "#66FF66"][index] },
          name: sentiment.charAt(0).toUpperCase() + sentiment.slice(1),
          text: isYearWise
            ? [...pre2014Data[sentiment], ...yearlyData[sentiment]].reverse().map((val, i) => `${yLabels[i]}: ${val}`)
            : avgData.categories.map((_, i) => `${avgData.categories[i]}: ${avgData[sentiment][i].toFixed(2)}`),
          textposition: "inside",
          hoverinfo: "none",
        })),
      ]}
      layout={{
        barmode: "stack",
        showlegend: true,
        height: isYearWise ? 700 : 300,
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

export default MumbaiMirrorChart;
