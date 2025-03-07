import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import Tabs from "./Tabs";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#f5f5f5" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "30px" }}>
        <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: "20px" }}>
          Welcome to the Dashboard
        </Typography>
        <Typography variant="body1" style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
          Select a category from the sidebar to explore different insights.
        </Typography>
        <Tabs />
      </div>
    </div>
  );
};


const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2, marginBottom: "20px" }}>
        <Button
          variant={selectedTab === "2004-2014" ? "contained" : "outlined"}
          onClick={() => setSelectedTab("2004-2014")}
        >
          2004-2014
        </Button>
        <Button
          variant={selectedTab === "2014-2024" ? "contained" : "outlined"}
          onClick={() => setSelectedTab("2014-2024")}
        >
          2014-2024
        </Button>
        <Button
          variant={selectedTab === "yearwise" ? "contained" : "outlined"}
          onClick={() => setSelectedTab("yearwise")}
        >
          Year-wise
        </Button>
      </Box>

      <Box>
        {selectedTab === "2004-2014" && <p>Content for 2004-2014</p>}
        {selectedTab === "2014-2024" && <p>Content for 2014-2024</p>}
        {selectedTab === "yearwise" && <p>Content for Year-wise</p>}
      </Box>
    </Box>
  );
};

export default Tabs;
