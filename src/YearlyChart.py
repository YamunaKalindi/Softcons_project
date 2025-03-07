import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";

const YearlyChart = () => {
  const [data, setData] = useState([]);
  
  // Simulate fetching data from the CSV (you can replace this with actual data fetching logic)
  useEffect(() => {
    const csvData = [
      { year: 2009, negative: 1, positive: 2 },
      { year: 2011, negative: 0, positive: 1 },
      { year: 2012, negative: 1, positive: 0 },
      { year: 2013, negative: 2, positive: 3 },
      { year: 2014, negative: 2, positive: 2 },
      { year: 2015, negative: 3, positive: 7 },
      { year: 2016, negative: 0, positive: 4 },
      { year: 2017, negative: 1, positive: 4 },
      { year: 2018, negative: 0, positive: 3 },
      { year: 2019, negative: 1, positive: 1 },
      { year: 2020, negative: 1, positive: 4 },
      { year: 2024, negative: 0, positive: 1 },
    ];

    setData(csvData);
  }, []);

  const prepareData = (period) => {
    const filteredData = data.filter(item => item.year < 2014 ? period === "Pre-2014" : period === "Post-2014");
    
    const negativeScores = filteredData.map(item => item.negative);
    const positiveScores = filteredData.map(item => item.positive);
    
    const avgNegative = negativeScores.reduce((a, b) => a + b, 0) / negativeScores.length || 0;
    const avgPositive = positiveScores.reduce((a, b) => a + b, 0) / positiveScores.length || 0;

    return { avgNegative, avgPositive };
  };

  const pre2014 = prepareData("Pre-2014");
  const post2014 = prepareData("Post-2014");

  const trace1 = {
    x: ["Pre-2014", "Post-2014"],
    y: [pre2014.avgNegative, post2014.avgNegative],
    name: "Negative",
    type: "bar",
    marker: { color: "red" },
  };

  const trace2 = {
    x: ["Pre-2014", "Post-2014"],
    y: [pre2014.avgPositive, post2014.avgPositive],
    name: "Positive",
    type: "bar",
    marker: { color: "blue" },
  };

  const layout = {
    title: "Average Sentiment Scores",
    barmode: "stack",
    xaxis: {
      title: "Period",
    },
    yaxis: {
      title: "Average Sentiment Score",
    },
    showlegend: true,
  };

  return (
    <Container>
      <Typography variant="h5">Yearly Sentiment Analysis</Typography>
      <Plot
        data={[trace1, trace2]}
        layout={layout}
        config={{ displayModeBar: false }}
      />
    </Container>
  );
};

export default YearlyChart;
