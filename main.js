let mailUtente = prompt("Inserire la propria email: ");
mailUtente = mailUtente.toLowerCase();

let listaEmail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];

for(let i = 0; i < listaEmail.length; i++){
    console.log(listaEmail[i]);
}


//Verifica con DoWhile
/*let i = 0;
let bool = true;

do{
    if(mailUtente == listaEmail[i]){
        console.log("L'utente può accedere al Gioco dei Dadi.");
        bool = false;
    }else{
        i++;
    }
}while(bool && i < listaEmail.length);*/


//Verifica con for
let bool = true;

for(let i = 0; i < listaEmail.length && bool; i++){

    console.log(listaEmail[i]);

    if(mailUtente == listaEmail[i]){
        console.log("L'utente può accedere al Gioco dei Dadi.");
        bool = false;
    }
}

let PlayAgain = true;

do{
    if(bool){
        console.log("L'utente non può accedere al Gioco dei Dadi.");

        let risposta = prompt("Vuoi inserire l'Email nella lista dei giocatori?(si/no)");
        if(risposta == "si"){
            listaEmail.push(mailUtente);

            for(let i = 0; i < listaEmail.length; i++){
                console.log(listaEmail[i]);
            }

            bool = false;
        } else{
            console.log("Giocheremo una prossima volta :c");
            
            bool = false;
            PlayAgain = false;
        }

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

        risposta = prompt("Vuoi giocare ancora?(si/no)");
        if(risposta == "no"){
            PlayAgain = false;
        }
    }
} while(PlayAgain);

console.log("Arrivederci!");
