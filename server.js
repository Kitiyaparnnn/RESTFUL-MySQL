const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { sequelize, User } = require("./models/users");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//homepage route
app.get("/", (req, res) => {
  return res.send({ error: false, massage: "Welcome girl" });
});

//Get all users
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

//Create user
app.post("/register", async (req, res) => {
  const { status, name, address, picture, package } = req.body;
  try {
    const user = await User.create({
      status,
      name,
      address,
      picture,
      package,
    });

    res.json({ massage: "Add user completed", data: user });
  } catch (err) {
    res.status(500).json({ massage: "Error", error: err });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: true });
    console.log(`server is running on ${PORT}`);
  } catch (err) {}
});

module.exports = app;
