import express from "express";
import axios from "axios";
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";
const yourUsername = "paresh";
const yourPassword = "12345";
const yourAPIKey = "ad065018-6432-45c9-b46a-1f5ab8b15b88";
const yourBearerToken = "e31fe78b-7f85-48a8-9739-41cc6dc54d73";
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});
app.get("/noAuth", async(req, res) => { 
  try {
    const result=await axios.get(API_URL+"/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});
app.get("/basicAuth", async(req, res) => {
  try {
    const result=await axios.get(API_URL+"/all?page=2", {
      auth: {
        username: "paresh",
        password: "12345",
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});
app.get("/apiKey", async(req, res) => {
  try {
    const result=await axios.get(API_URL+"/filter", {
      params: {
        score: 5,
        apiKey: "ad065018-6432-45c9-b46a-1f5ab8b15b88",
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};
app.get("/bearerToken", async(req, res) => {
  try {
    const result = await axios.get(API_URL+"/secrets/2",config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
