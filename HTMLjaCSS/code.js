function UpdateTittle(){
    var dateGen = new Date();
    var dateString = "";

    dateString = dateGen.getFullYear() + "/" + (dateGen.getMonth()+1) + "/" + dateGen.getDate();

    document.getElementById("tittleText").innerHTML = dateString;
}