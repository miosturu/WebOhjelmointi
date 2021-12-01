"use strict";


const person = {
    name:"",
    phone:""
}


function addNewPerson(name, phone, array){
    let newPerson = Object.create(person);
    newPerson.name = name;
    newPerson.phone = phone;
    array.push(newPerson);
}


function searchByName(book, name){
    for (let i = 0; i < book.length; i++){
        if (book[i].name.toLowerCase() === name.toLowerCase()){
            return book[i].phone;
        }
    }
    return `Could not find '${name}'`;
}


function aksInput(book){
    while(true){
        let input = require("readline-sync");
        let wantedName = input.question("Enter name for search>");
        console.log(searchByName(book, wantedName));
    }
}


function askUserInfo(book){
    let input = require("readline-sync");

    let userName = input.question("Enter you name>");
    let phoneNumber = input.question("Enter your phone number>");

    addNewPerson(userName, phoneNumber, book);

}


function main(){
    let phoneBook = [];

    addNewPerson("Foo", "12345", phoneBook);
    addNewPerson("Bar", "54321", phoneBook);
    addNewPerson("Faa", "97456", phoneBook);
    addNewPerson("Ber", "85347", phoneBook);


    askUserInfo(phoneBook);
    aksInput(phoneBook);
}

main();