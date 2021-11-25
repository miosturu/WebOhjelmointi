"use strict";

// Saadaan laitettu päälle: >nodemon .\index.js

const port = 3030;

const mysql = require("mysql");
const express = require("express");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sqlConn = mysql.createConnection({
  host: "localhost",
  user: "mikko",
  password: "1234",
  database: "urheilijat",
  multipleStatements: true,
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

sqlConn.connect((err) => {
  if (err) {
    console.log("Virhe yhdistäessä SQL-palvelimeen: " + err);
    return;
  }
  console.log("Yhdistettiin SQL-palvelimeen");
});

// OK
app.get("/urheilijat", (req, res) => {
  console.log("Heattiin kaikki urheilijat");
  sqlConn.query("SELECT * FROM urheilijat", (err, rows) => {
    if (err) throw err;
    return res.status(200).json(rows);
  });
});

// OK
app.get("/urheilijat/:id", (req, res) => {
  const urlOsat = req.url.split("/");
  const id = urlOsat[urlOsat.length - 1];

  console.log("Haettiin urheilija, ID: " + id);

  sqlConn.query("SELECT * FROM urheilijat WHERE id=?", id, (err, rows) => {
    if (err) throw err;
    return res.status(200).json(rows);
  });
});

// OK
app.put("/urheilijat/muokkaa/:id", (req, res) => {
  const urlOsat = req.url.split("/");
  const id = urlOsat[urlOsat.length - 1];

  const urheilija = req.body;

  console.log("Muokataan urheilijaa, ID: " + id);

  sqlConn.query(
    "UPDATE urheilijat SET ? WHERE id = ?",
    [urheilija, req.params.id],
    function (error, results) {
      if (error) throw error;
      sqlConn.query("SELECT * FROM urheilijat WHERE id=?", id, (err, rows) => {
        if (err) throw err;
        res.end(JSON.stringify(rows[0]));
      });
    }
  );
});

// OK
app.post("/lisaa", (req, res) => {
  let uusiUrheilija = req.body;

  if (!uusiUrheilija) {
    return res
      .status(400)
      .send({ error: true, message: "Ei voida muodostaa objektia" });
  }

  console.log("Lisättiin uusi urheilija");

  sqlConn.query(
    "INSERT INTO urheilijat SET ?",
    uusiUrheilija,
    function (error, results, fields) {
      if (error) throw error;
      return res.send(
        JSON.stringify({
          id: results.insertID,
          ...uusiUrheilija,
        })
      );
    }
  );
});

// OK
app.delete("/urheilijat/:id", (req, res) => {
  const urlOsat = req.url.split("/");
  const id = urlOsat[urlOsat.length - 1];

  console.log("ID:" + id);

  try {
    sqlConn.query(
      "DELETE FROM urheilijat WHERE id=?",
      [id],
      function (error, results) {
        if (error) throw error;
        console.log("Poistettiin urheilija, ID: " + id);
        return res.sendStatus(200);
      }
    );
  } catch (err) {
    console.log("Ongelma tiedon poistamisessa: " + err);
  }
});

app.listen(port, () => {
  console.log(`Serveri kuntelee portissa ${port}`);
});

module.exports = app;
