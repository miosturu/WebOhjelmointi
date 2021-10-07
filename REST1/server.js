"use strict";
// Tarvitaan GET ja POST sanojen lisäämiselle ja saamiselle
// Parametrina suomenkielinen sana
// POST metodi luo uuden rivin tekstitiedostoon

// HUOM.! serveri päälle: >nodemon .\server.js

const bodyparser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let data = [];

//Uuden alku

/*CORS isn’t enabled on the server, this is due to security reasons by default,
so no one else but the webserver itself can make requests to the server.*/
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
      "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    res.setHeader("Content-type", "application/json");
  
    // Pass to next layer of middleware
    next();
});

//Uuden loppu 


app.get('/words', (req, res) =>{
    res.json(data);
    console.log(req.ip + " haki tietoa");
});


app.get('/words/:word', (req, res) =>{
    const searchWord = req.params.word;

    const tulos = [];

    let loytyi = false;

    for (var tietue in data){
        if (data[tietue].fi == searchWord){
            tulos[0] = data[tietue];
            res.json(tulos);
            loytyi = true;
        }
    }

    if (!loytyi){
        res.json("")
    }

    console.log(req.ip + " haki tietoa sanasta '" + searchWord + "'");
});


app.post('/words', (req, res) =>{
    let newWord = req.body;

    console.log(newWord);
    console.log("Lisättiin tietoa: " + newWord.fi + " = " + newWord.en);

    // Tarkistetaan, ettei tule kahta kertaa sama tieto
    for (let i = 0; i < data.length; i++){
        if (data[i][0] === newWord.fi){
            res.send(data);
            return;
        }
    }

    const newObject = {
        fi:newWord.fi,
        en:newWord.en
    }

    data.push(newObject);
    res.send(data);

    let content = "" + newWord.fi + " " + newWord.en + "\r\n";

    fs.writeFile('sanakirja.txt', content, {flag: 'a+'}, err => {
        if (err){
            return console.log(err);
        }
    })
})


function readData(){
    fs.readFile('sanakirja.txt', 'utf8', function (err, result){
        if (err){
            return console.log(err);
        }
        console.log("Luetaan tiedostoa")

        let arr =  result.split("\r\n");
        let arrLen = arr.length;

        // Jaetaan taulukko kahtia suomen(0) ja englannin(1) kielisiin osuuksiin
        for (let i = 0; i < arr.length; i++){ 
            if (arr[i] != "")
                arr[i] = arr[i].split(' ');
        }

        // Muokkataan array objektiksi
        for (let j = 0; j < arrLen - 1; j++){
            let obj = {
                fi:arr[j][0],
                en:arr[j][1]
            }

            data.push(obj);
        }
    });
}


app.listen(8080, () => {
    console.log('Kuunnellaan portissa 8080');
    readData();
})