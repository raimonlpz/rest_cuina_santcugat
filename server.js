const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

// Load .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/config", (req, res) => {
  res.json({
    API_URL: process.env.STRAPI_URL,
    API_TOKEN: process.env.STRAPI_KEY,
  });
});

app.use((req, res, next) => {
  const extname = path.extname(req.path);
  if (extname === "") {
    const possibleFile = path.join(__dirname, "public", req.path + ".html");
    if (fs.existsSync(possibleFile)) {
      return res.sendFile(possibleFile);
    }
  }
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.use(express.static("public")); // Serve static files from 'public' directory

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
