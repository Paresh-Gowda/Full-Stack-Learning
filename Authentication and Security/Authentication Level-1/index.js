import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;
const db = new pg.Client ({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "password",
  port: 5432,
});
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    const checkResult= await db.query("SELECT * FROM users where email = $1", [email]);
    if(checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in..")
    } else {
      const result = await db.query("INSERT INTO users (email, password) VALUES ($1,$2)", [email,password]);
      console.log(result);
      res.render("secrets.ejs");
    }
  } catch(err) {
    console.log(err);
  }
});
app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    const result= await db.query("SELECT * FROM users where email = $1", [email]);
    if(result.rows.length > 0) {
      const user = result.rows[0];
      const storePassword = user.password;
      if(password===storePassword) {
        res.render("secrets.ejs");
      } else {
        res.send("Incorrect password");
      }
    } else {
      res.send("User not found");
    }
  } catch(err) {
    console.log(err);
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
