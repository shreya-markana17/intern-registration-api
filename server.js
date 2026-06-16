const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let interns = [];

app.get("/", (req, res) => {
  res.send("Intern API Running");
});

app.post("/register", (req, res) => {
  const { name, email, college } = req.body;

  const newIntern = {
    id: interns.length + 1,
    name,
    email,
    college,
  };

  interns.push(newIntern);

  res.json(newIntern);
});

app.get("/interns", (req, res) => {
  res.json(interns);
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});