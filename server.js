const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Register = require("./models/Schema");

const app = express();

//mongoDB connection
mongoose.connect("mongodb+srv://Register:Saru2002@nodejs.4hovdfe.mongodb.net/HEllo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//styling css path
app.use(express.static(path.join(__dirname, "public")));

//body parser middleware
app.use(express.urlencoded({ extended: false }));

//path of html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

//data post 
app.post("/", async (req, res) => {
  try {
    const newRegister = new Register({
      Fname: req.body.Fname,
      Lname: req.body.Lname,
      Password: req.body.Password,
      ComPass: req.body.ComPass,
      Gender: req.body.Gender,
      Email: req.body.Email,
      Phone: req.body.Phone,
      Address: req.body.Address,
      Postal: req.body.Postal,
    });

    await newRegister.save();

  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
