const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tokens = [];
let id = 1;

app.get("/", (req, res) => {
  res.send("Token Minting API Running");
});

// Mint Token
app.post("/mint", (req, res) => {
  const { walletAddress, amount } = req.body;

  const newToken = {
    id: id++,
    walletAddress,
    amount,
    mintedAt: new Date(),
  };

  tokens.push(newToken);

  res.status(201).json({
    message: "Token minted successfully",
    data: newToken,
  });
});

// Get All Minted Tokens
app.get("/tokens", (req, res) => {
  res.json(tokens);
});

app.listen(5002, () => {
  console.log("Server running on port 5002");
});
