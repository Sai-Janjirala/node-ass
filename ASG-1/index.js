const express = require("express");

const app = express();

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];


app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/students", (req, res) => {
  res.status(200).json(students);
});
app.get("/students/topper", (req, res) => {
  res.status(200).json(students.reduce((topper, student) => {
    return student.cgpa > topper.cgpa ? student : topper;
  }));
});

app.get("/students/average", (req, res) => {
  const average = students.map(student => student.cgpa).reduce((sum, cgpa) => sum + cgpa, 0) / students.length;
  res.status(200).json({ average });
});

app.get("/students/count", (req, res) => {
  res.status(200).json({ count: students.length });
});

app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ error: "Student not found" });
  }
});

app.get("/students/branch/:branchName", (req, res) => {
  const filteredStudents = students.filter(s => s.branch === req.params.branchName);
  res.status(200).json(filteredStudents);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});   