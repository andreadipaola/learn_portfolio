
//controllo che il file .js sia linkato correttamente alla pagina html
console.log('hello world');
//definisco la variabile bakcBtn che intercetta tramite id il bottone con la freccia
const backBtn = document.getElementById('backBtn');
//all'evento 'click' faccio corrispondere la funzione che scrolla la pagina fino in cima
backBtn.addEventListener('click', function() {
  //console.log('Hey, mi hai cliccato!!');
  window.scrollTo(0, 0);
});

//se sono già in cima non ha senso far apparire il bottone per scrollare fino a su in cima dunque controllero la posizione in Y, se sarà maggiore di 0, vorrà dire che ho scrollato in basso e quindi farà apparire il bottone altrimenti vorrà dire che la posizione è 0 e che quindi sono già in cima e non ha senso far apparire il bottone
window.addEventListener('scroll', function() {
  let posY = window.scrollY;

  if (posY > 0) {
    backBtn.style.display = 'block';
  } else {
    backBtn.style.display = 'none';
  }
});
