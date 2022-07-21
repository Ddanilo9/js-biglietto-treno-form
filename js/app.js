let nome //ok
let eta  //ok
let chilometri  //ok
let prezzoAlKm = 0.21  //ok
let scontoMinorenne = (0.21 / 100 * 20); //ok
let scontoOver65 = (0.21 / 100 * 40);  //ok
let prezzo



let inviaButton = document.querySelector('input[type="submit"]'); 
// console.log (inviaButton)
inviaButton.addEventListener('click', function ()  { 


  nome = document.querySelector('input[name="nome"]')
  let nomePasseggero = (nome.value)
  console.log(nomePasseggero)

  chilometri = document.querySelector('input[name="km"]')
  let prezzo = (chilometri.value)
  console.log(prezzo)

  eta = document.getElementById('age').value;
  console.log(eta);

  if(eta === "Under 18") {
    prezzo = prezzo * 0.21 - (prezzo * scontoMinorenne) 
    console.log(prezzo) 
}
  if(eta === "Over 65") {
        prezzo = prezzo * 0.21 - (prezzo * scontoOver65) 
        console.log(prezzo) 
}
  if(eta === "Tra 18 e 65") {
    prezzo = prezzo * 0.21 
    console.log(prezzo) 
}

let testoPrezzo = document.getElementById(pf);
pf.innerHTML = prezzo.toFixed(2) + "€"
})

