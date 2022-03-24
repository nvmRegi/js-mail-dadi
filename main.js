let mailUtente = prompt("Inserire la propria email: ");
mailUtente = mailUtente.toLowerCase();

let listaEmail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];

let i = 0;
bool = true;

do{
    if(mailUtente == listaEmail){
        console.log("L'utente può accedere al Gioco dei Dadi.");
        bool = false;
    }else{
        i++;
    }
}while(bool || i < listaEmail.length)

if(bool){
    console.log("L'utente non può accedere al Gioco dei Dadi");
}else{

    //Funzione per generare un numero random da 1 a 6
    function generatoreNumeri (min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    //numero random giocatore
    const numRandom = generatoreNumeri(1, 6);
    console.log("Il tuo numero è");
    console.log(numRandom);

    //numero random computer
    const numPC = generatoreNumeri(1, 6);
    console.log("Il numero del tuo avversario è");
    console.log(numPC);

    if(numRandom > numPC ){
        console.log("HAI VINTO!");
    } else if(numRandom < numPC){
        console.log("HAI PERSO!");
    } else{
        console.log("PAREGGIO!");
    }
}