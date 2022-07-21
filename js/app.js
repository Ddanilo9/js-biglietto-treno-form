//dichiarazione variabili
let nome 
let chilometri
let prezzoFinale






//selezione il bottone invia nel dom
let inviaButton = document.querySelector('input[type="submit"]'); 
//provo a vedere se il bottone con la funzione mi da l'output nella console
inviaButton.addEventListener('click', function ()  { 
    let inputNome = document.querySelector('input[name="nome"]');
    let nome = inputNome.value; 
    console.log(nome);

    let inputchilometri= document.querySelector('input[name="km"]');
    let chilometri = inputchilometri.value; 
    console.log(chilometri * 0.21);


})


