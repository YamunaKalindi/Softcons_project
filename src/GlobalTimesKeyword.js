import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GlobalTimesKeyword = () => {
  // Sentiment Data
  const labels = [
    "Patriotic",
    "Culturally Preserving",
    "Service Oriented",
    "Hindu Supremacist",
    "Islamophobic",
    "Hindu Fascist",
  ];

  const pre2014Data = [22.82, 31.52, 25.80, 10.56, 2.72, 6.59];
  const post2014Data = [18.62, 25.65, 21.30, 14.95, 7.84, 11.65];

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Sentiment Distribution" },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: "Percentage (%)" } },
    },
  };

  const barChartData = (data, title) => ({
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
      },
    ],
  });

  return (
    <Box>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Global Times - Keyword & Language Analysis
      </Typography>

      {/* Pre-2014 Sentiment Chart */}
      <Box sx={{ marginBottom: "30px" }}>
        <Typography variant="h6">Pre-2014 Sentiment Distribution</Typography>
        <Bar data={barChartData(pre2014Data, "Pre-2014")} options={barChartOptions} />
      </Box>

      {/* Post-2014 Sentiment Chart */}
      <Box>
        <Typography variant="h6">Post-2014 Sentiment Distribution</Typography>
        <Bar data={barChartData(post2014Data, "Post-2014")} options={barChartOptions} />
      </Box>
    </Box>
  );
};

export default GlobalTimesKeyword;
