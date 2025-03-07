import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Button, Typography, Container } from "@mui/material";
import Dashboard from "./Dashboard";  // ✅ Import the separate Dashboard file

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Container
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#000",
        color: "white",
      }}
    >
      <Typography variant="h2" style={{ fontWeight: "bold", marginBottom: "20px" }}>
        RSS Sentiment Analysis Dashboard
      </Typography>
      <Typography variant="body1" style={{ maxWidth: "600px", margin: "0 auto 30px auto", fontSize: "18px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eget nisl tincidunt fermentum.
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: "white", color: "black", fontSize: "18px", padding: "10px 30px" }}
        onClick={() => navigate("/dashboard")}
      >
        Explore →
      </Button>
    </Container>
  );
};


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />  {/* ✅ Uses the separate Dashboard component */}
      </Routes>
    </Router>
  );
}

export default App;
