import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>RSS SENTIMENT ANALYSIS DASHBOARD</h1>
      <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button style={styles.button} onClick={() => navigate("/dashboard")}>
        Explore →
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  paragraph: {
    maxWidth: "600px",
    marginTop: "10px",
    fontSize: "1.1rem",
    color: "#ccc",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1.2rem",
    backgroundColor: "#000",
    color: "#fff",
    border: "2px solid #fff",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Home;
