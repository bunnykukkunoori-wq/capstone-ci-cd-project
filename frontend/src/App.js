import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/time")
      .then(res => res.json())
      .then(data => setTime(data.now));
  }, []);

  return (
    <center>
      <h1>CI/CD Project 🚀</h1>
      <p>Frontend talking to Backend Successfully</p>
      <h3>Server Time: {time}</h3>
    </center>
  );
}

export default App;
