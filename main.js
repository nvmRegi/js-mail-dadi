let mailUtente = prompt("Inserire la propria email: ");

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