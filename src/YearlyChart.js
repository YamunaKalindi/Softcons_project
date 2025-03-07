import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { Box, Button } from "@mui/material";

const YearlyChart = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const [activeTimePeriod, setActiveTimePeriod] = useState("2004-2014");

  useEffect(() => {
    const pre2014Data = data.filter(item => item.Period === "Pre-2014");
    const post2014Data = data.filter(item => item.Period === "Post-2014");

    const pre2014Avg = {
      negative: pre2014Data.reduce((acc, item) => acc + item.negative, 0) / pre2014Data.length,
      neutral: pre2014Data.reduce((acc, item) => acc + item.neutral || 0, 0) / pre2014Data.length,
      positive: pre2014Data.reduce((acc, item) => acc + item.positive, 0) / pre2014Data.length,
    };

    const post2014Avg = {
      negative: post2014Data.reduce((acc, item) => acc + item.negative, 0) / post2014Data.length,
      neutral: post2014Data.reduce((acc, item) => acc + item.neutral || 0, 0) / post2014Data.length,
      positive: post2014Data.reduce((acc, item) => acc + item.positive, 0) / post2014Data.length,
    };

    if (activeTimePeriod === "2004-2014") {
      setChartData([pre2014Avg]);
    } else {
      setChartData([post2014Avg]);
    }
  }, [data, activeTimePeriod]);

  return (
    <Box>
      <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Button onClick={() => setActiveTimePeriod("2004-2014")}>
          2004-2014
        </Button>
        <Button onClick={() => setActiveTimePeriod("2014-2024")}>
          2014-2024
        </Button>
      </Box>

      <Plot
        data={[
          {
            x: [chartData[0]?.negative, chartData[0]?.neutral, chartData[0]?.positive],
            y: ['Sentiment'],
            name: activeTimePeriod,
            type: 'bar',
            orientation: 'h',
            marker: {
              color: ['darkred', 'gray', 'darkblue'],
            },
          },
        ]}
        layout={{
          title: 'Average Sentiment Scores',
          barmode: 'stack',
          xaxis: {
            title: 'Scores',
            tickvals: [-1, 0, 1],
            ticktext: ['Very Negative', 'Neutral', 'Very Positive'],
          },
          height: 400,
        }}
      />
    </Box>
  );
};

export default YearlyChart;
