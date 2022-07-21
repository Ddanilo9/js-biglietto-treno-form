//dichiarazione variabili
let nome = document.getElementById('nome')
let chilometri
let eta
let prezzoFinale
let scontoMinorenne = (0.21 / 100 * 20);
let scontoOver65 = (0.21 / 100 * 40);






let inviaButton = document.querySelector('input[type="submit"]'); 

inviaButton.addEventListener('click', function ()  { 
    let nome = document.getElementById('nome').value;
        console.log('nome passeggero', nome);
    
    let eta = document.getElementById('age').value;
    let etaPasseggero = parseInt(eta);
        console.log('età passeggero', eta);

    let chilometri= document.getElementById('chilometri').value;
        console.log('prezzo', chilometri * 0.21);

        if () {
            
        }
})


