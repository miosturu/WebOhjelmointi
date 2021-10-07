"use strict";
// Tarvitaan GET ja POST sanojen lisäämiselle ja saamiselle
// Parametrina suomenkielinen sana
// POST metodi luo uuden rivin tekstitiedostoon

// HUOM.! serveri päälle: >nodemon .\server.js

const bodyparser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express().use( bodyparser.json() );

let data = [];

app.get('/words', (req, res) =>{
    res.send(data);
    console.log(req.ip + " haki tietoa");
});


app.get('/words/:word', (req, res) =>{
    const searchWord = req.params.word;

    for (let i = 0; i < data.length; i++){
        if (data[i][0] === searchWord){
            res.send(data[i][1]);
            break;
        }
    }

    console.log(req.ip + " haki tietoa");
});


app.post('/words', (req, res) =>{
    let newWord = req.body;

    console.log("Lisättiin tietoa");

    for (let i = 0; i < data.length; i++){
        if (data[i][0] === newWord[0]){
            res.send(data);
            return;
        }
    }

    data.push(newWord);
    res.send(data);

    let content = "" + newWord[0] + " " + newWord[1] + "\r\n";

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
        
        // Jaetaan taulukko kahtia suomen(0) ja englannin(1) kielisiin osuuksiin
        for (let i = 0; i < arr.length; i++){ 
            if (arr[i] != "")
                arr[i] = arr[i].split(' ');
        }
        data = arr;
    });
}


app.listen(8080, () => {
    console.log('Kuunnellaan portissa 8080');
    readData();
})