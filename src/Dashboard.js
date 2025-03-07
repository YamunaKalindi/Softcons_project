import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Box, Typography, Button } from "@mui/material";
import NewspaperArticles from "./NewspaperArticles"; // Existing component
import NewspaperArticlesKeyword from "./NewspaperArticlesKeyword"; // New import

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Sentiment Trends & Evolution");
  const [activeSubTab, setActiveSubTab] = useState("News Articles");

  const subTabs = ["News Articles", "Twitter", "Instagram", "Other"];

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "white" }}>
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: "30px", color: "black" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
          {activeTab}
        </Typography>

        {/* Sub-tabs: News, Twitter, Instagram, Other */}
        <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          {subTabs.map((subTab) => (
            <Button
              key={subTab}
              onClick={() => setActiveSubTab(subTab)}
              sx={{
                backgroundColor: activeSubTab === subTab ? "black" : "white",
                color: activeSubTab === subTab ? "white" : "black",
                border: "1px solid black",
                "&:hover": { backgroundColor: "#333", color: "white" },
              }}
            >
              {subTab}
            </Button>
          ))}
        </Box>

        {/* Content */}
        <Typography variant="body1">
          Showing data for <strong>{activeSubTab}</strong> under <strong>{activeTab}</strong>.
        </Typography>

        {/* Render NewspaperArticlesKeyword if in "Keyword & Language Analysis" + "News Articles" */}
        {activeTab === "Keyword & Language Analysis" && activeSubTab === "News Articles" ? (
          <NewspaperArticlesKeyword />
        ) : (
          <NewspaperArticles />
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
