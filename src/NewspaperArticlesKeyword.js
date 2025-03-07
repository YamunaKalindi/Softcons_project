import React, { useState } from "react";
import GlobalTimesKeyword from "./GlobalTimesKeyword"; // Import individual newspaper components
import { Box, Button } from "@mui/material";

const NewspaperArticlesKeyword = () => {
  const [selectedNewspaper, setSelectedNewspaper] = useState("Global Times");

  const newspapers = ["Global Times"]; // Add more newspapers here

  return (
    <Box>
      {/* Newspaper Selection Buttons */}
      <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {newspapers.map((newspaper) => (
          <Button
            key={newspaper}
            onClick={() => setSelectedNewspaper(newspaper)}
            sx={{
              backgroundColor: selectedNewspaper === newspaper ? "black" : "white",
              color: selectedNewspaper === newspaper ? "white" : "black",
              border: "1px solid black",
              "&:hover": { backgroundColor: "#333", color: "white" },
            }}
          >
            {newspaper}
          </Button>
        ))}
      </Box>

      {/* Display the corresponding newspaper component */}
      {selectedNewspaper === "Global Times" && <GlobalTimesKeyword />}
    </Box>
  );
};

export default NewspaperArticlesKeyword;
