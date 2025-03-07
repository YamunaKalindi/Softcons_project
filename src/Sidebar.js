import React, { useState } from "react";
import { Button, Box } from "@mui/material";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const categories = [
    "Sentiment Trends & Evolution",
    "Keyword & Language Analysis",
    "Regional & Media Variations",
    "Social & Demographic Insights",
    "Political & Election Influence",
  ];

  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => setActiveTab(category)}
          sx={{
            textAlign: "left",
            justifyContent: "flex-start",
            color: activeTab === category ? "black" : "white",
            backgroundColor: activeTab === category ? "white" : "black",
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
};

export default Sidebar;
