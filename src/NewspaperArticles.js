import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import GlobalTimesChart from "./GlobalTimesChart";
import SentinnelChart from "./SentinnelChart";
import HinduSentimentChart from "./HinduSentimentChart"; // Import The Hindu chart
import RussiaTodayChart from "./RussiaTodayChart";
import MumbaiMirrorChart from "./MumbaiMirrorChart";

const newspaperNames = [
  "Global Times",
  "Sentinnel",
  "The Hindu",
  "Andhra Jyoti",
  "Russia Today",
  "Mumbai Mirror",
];

// Map newspapers to their respective chart components
const newspaperCharts = {
  "Global Times": GlobalTimesChart,
  "Sentinnel": SentinnelChart,
  "The Hindu": HinduSentimentChart, 
  "Russia Today": RussiaTodayChart,
  "Mumbai Mirror": MumbaiMirrorChart,// Added The Hindu chart
  // Add other newspapers here when their charts are ready
};

const NewspaperArticles = () => {
  const [selectedNewspaper, setSelectedNewspaper] = useState(null);
  const [timePeriod, setTimePeriod] = useState("Year-wise"); // Default to Year-wise

  return (
    <Box sx={{ width: "85%", margin: "auto", padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
        Newspaper Articles
      </Typography>

      {newspaperNames.map((newspaper, index) => (
        <Box key={newspaper} sx={{ marginBottom: "15px" }}>
          {selectedNewspaper === newspaper ? (
            <Box
              sx={{
                width: "100%",
                minHeight: "500px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid white",
                padding: "25px",
                borderRadius: "8px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {/* Newspaper Name */}
              <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px", color: "white" }}>
                {newspaper}
              </Typography>

              {/* Chart Container */}
              <Box sx={{ width: "100%", height: "auto", minHeight: "500px" }}>
                {newspaperCharts[newspaper] ? (
                  React.createElement(newspaperCharts[newspaper], { timePeriod })
                ) : (
                  <Typography color="gray">Chart not available</Typography>
                )}
              </Box>

              <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                {/* Toggle Button for Year-wise / Average */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    setTimePeriod((prev) => (prev === "Year-wise" ? "Average" : "Year-wise"))
                  }
                >
                  Switch to {timePeriod === "Year-wise" ? "Average" : "Year-wise"}
                </Button>

                {/* Back Button */}
                <Button onClick={() => setSelectedNewspaper(null)} variant="contained" color="secondary">
                  Back
                </Button>
              </Box>
            </Box>
          ) : (
            <Button
              variant="contained"
              sx={{
                width: "100%",
                padding: "10px",
                fontSize: "14px",
                backgroundColor: "black",
                color: "white",
                "&:hover": { backgroundColor: "#333" },
              }}
              onClick={() => setSelectedNewspaper(newspaper)}
            >
              {newspaper}
            </Button>
          )}

          {/* Add divider except for the last item */}
          {index !== newspaperNames.length - 1 && <Divider sx={{ margin: "10px 0" }} />}
        </Box>
      ))}
    </Box>
  );
};

export default NewspaperArticles;
