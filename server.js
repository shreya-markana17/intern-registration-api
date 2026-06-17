const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// In-memory DB
let interns = [];
let id = 1;

// Home route
app.get("/", (req, res) => {
  res.send("Task Submission API Running");
});


// ➕ Register Intern (Task Submission style)
app.post("/register", (req, res) => {
  const { name, email, college } = req.body;

  if (!name || !email || !college) {
    return res.status(400).json({
      message: "All fields are required (name, email, college)",
    });
  }

  const newIntern = {
    id: id++,
    name,
    email,
    college,
    submittedAt: new Date(),
  };

  interns.push(newIntern);

  res.status(201).json({
    message: "Intern registered successfully",
    data: newIntern,
  });
});


app.get("/interns", (req, res) => {
  res.json({
    total: interns.length,
    data: interns,
  });
});


app.get("/interns/:id", (req, res) => {
  const intern = interns.find((i) => i.id == req.params.id);

  if (!intern) {
    return res.status(404).json({ message: "Intern not found" });
  }

  res.json(intern);
});


app.delete("/interns/:id", (req, res) => {
  interns = interns.filter((i) => i.id != req.params.id);

  res.json({ message: "Intern deleted successfully" });
});


app.listen(5001, () => {
  console.log("Server running on port 5001");
});
