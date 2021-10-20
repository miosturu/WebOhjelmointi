const mysql = require("mysql");
const userSubmittedVariable = "1"; 

const express = require("express");
const bodyParser = require("body-parser");
const app = express().use(bodyParser.json());

const portti = 8080;

const con = mysql.createConnection({
    host: "localhost",
    user: "mikko",
    password: "1234",
    database:"teht5",
    multipleStatements: true
});


let data = [ ];


// Add headers
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


function establishConnecitionToDb(){
    con.connect((err) => {
        if (err) {
            console.log("Virhe tietokantaan yhdistäessä:\n" + err);
            return;
        }
        console.log("Saatiin yhteys tietokantaan");
    });
}


// GET all users
app.get("/users", (req, res) => {
    res.json(data);
    console.log("Heattiin kaikkien käyttäjien tiedot");
});
  
  
// GET a user
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = data.find((user) => user.id === id);
    res.json(user ? user : { message: "Not found" });
    console.log("Heattiin käyttäjän tiedot, ID: " + id);
});
  
  
// ADD a user, voisi laittaa menemään ilman ID:tä
app.post("/users", (req, res) => {
    const user = req.body;

    console.log("Lisätään uusi käyttäjä:\n" + user.firstName +"\n" + user.lastName);

    data.push(user);
    res.json(data);

    con.query(
        'INSERT INTO henkilot SET ?',
        user,
        (err, res) => {
            if (err) throw err;
            else console.log("Käyttäjän lisääminen onnistui");
        }
    );
});
  
  
// UPDATE a user
app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedUser = req.body;
    data = data.map((user) => (user.id === id ? updatedUser : user));
    res.json(data);
    // TODO update Db

    con.query(
        "UPDATE henkilot SET firstName = ?, lastName = ? WHERE id = ?",
        [updatedUser.firstName, updatedUser.lastName, id],
        (err, res) =>{
            if (err) throw err;
            console.log(`Muutettiin ${res.changedRows} rivi(ä)`);
        }
    );
});
  
  
// DELETE a user
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    data = data.filter((user) => user.id !== id);
    res.json(data);

    con.query(
        "DELETE FROM henkilot WHERE id = ?",
        [id],
        (err, res) => {
            if (err) throw err;
            console.log('Poistettiin rivi, ID: ' + id);
        }
    );
});


function EndConnectionTODb(){
    con.end((err) => {
        // The connection is terminated gracefully
        // Ensures all remaining queries are executed
        // Then sends a quit packet to the MySQL server.
    });
}


function getUserInformation(){
    con.query(
        'SELECT * FROM henkilot',
        (err, rows) => {
            if (err) throw err;
            rows.forEach( (row) => {
                const userObj = {
                    id:        row.id,
                    firstName: row.firstName,
                    lastName:  row.lastName
                };

                data.push(userObj);
            });
        }
    );
}


app.listen(portti, () => {
    console.log("Serveri kuuntelee porttia " + portti);
    establishConnecitionToDb();
    getUserInformation();
});