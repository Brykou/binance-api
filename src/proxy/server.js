const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = 3100;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET"]
  })
);

app.get("/tickers", (req, res) => {
  axios.get("https://api.binance.com/api/v1/exchangeInfo").then(response => {
    res.send(response.data);
  });
});

app.get("/depth/:symbol/:limit", (req, res) => {
  const symbol = req.params.symbol;
  const limit = req.params.limit;
  axios
    .get(`https://api.binance.com/api/v1/depth?symbol=${symbol}&limit=${limit}`)
    .then(response => {
      res.send(response.data);
    });
});

app.get("/trades/:symbol/:limit", (req, res) => {
  const symbol = req.params.symbol;
  const limit = req.params.limit;
  axios
    .get(
      `https://api.binance.com/api/v1/trades?symbol=${symbol}&limit=${limit}`
    )
    .then(response => {
      res.send(response.data);
    });
});

app.listen(PORT, () => console.log("Server is listening on port " + PORT));
