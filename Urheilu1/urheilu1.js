"use strict";

class Henkilo{
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi){
        this.etunimet = etunimet;
        this.sukunimi = sukunimi;
        this.kutsumanimi = kutsumanimi;
        this.syntymavuosi = syntymavuosi;
    }
}

class Urheilija extends Henkilo{
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi, linkki, omapaino, laji, saavutukset){
        super(Henkilo);
        this.etunimet = etunimet;
        this.sukunimi = sukunimi;
        this.kutsumanimi = kutsumanimi;
        this.syntymavuosi = syntymavuosi;

        this.linkki = linkki;
        this.omapaino = omapaino;
        this.laji = laji;
        this.saavutukset = saavutukset;
    }

    /*Get:erit*/

    getEtunimet(){
        return this.etunimet;
    }

    getSukunimi(){
        return this.sukunimi;
    }

    getKutsumanimi(){
        return this.kutsumanimi;
    }

    getSyntymavuosi(){
        return this.syntymavuosi;
    }

    getLinkki(){
        return this.linkki
    }

    getOmapaino(){
        return this.omapaino;
    }

    getLaji(){
        return this.laji;
    }

    getSaavutukset(){
        return this.saavutukset;
    }


    /*Set:erit*/

    setEtunimet(etunimet){
        this.etunimet = etunimet;
    }

    setSukunimi(sukunimi){
        this.sukunimi = sukunimi;
    }

    setKutsumanimi(kutsumanimi){
        this.kutsumanimi = kutsumanimi;
    }

    setSyntymavuosi(syntymavuosi){
        this.syntymavuosi = syntymavuosi;
    }


    setLinkki(linkki){
        this.linkki = linkki;
    }

    setOmapaino(omapaino){
        this.omapaino = omapaino;
    }

    setLaji(laji){
        this.laji = laji;
    }

    setSaavutukset(saavutukset){
        this.saavutukset = saavutukset;
    }

    /*Muut funktiot*/

    tulostaTiedot(){
        console.log("");
        console.log("Nimi: " + this.getEtunimet() + " " + this.getSukunimi());
        console.log("Kutsumanimi: " + this.getKutsumanimi());
        console.log("Syntymävuosi: " + this.getSyntymavuosi());
        console.log("Kuvan linkki: " + this.getLinkki());
        console.log("Paino: " + this.getOmapaino());
        console.log("Laji: " + this.getLaji());
        
        let saavutuksetString = "";

        for (let i = 0; i < this.saavutukset.length; i++){
            saavutuksetString += this.saavutukset[i] + ", ";
        }

        console.log("Saavutukset: " + saavutuksetString.substring(0, saavutuksetString.length - 2));
        console.log("");
    }
}

function main(){
    let t0 = new Urheilija(
        "Aku",
        "Ankka",
        "Aku",
        1955,
        "https://foo.bar",
        65.5,
        "hiihto",
        ["SM-kulta", "MM-pronssi"]
    );
    t0.tulostaTiedot();

    t0.setLaji("Jääkiekko");
    t0.tulostaTiedot();
}

main()