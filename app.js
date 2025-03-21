let amigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById('amigo').value.trim();

  if (nomeAmigo && !amigos.includes(nomeAmigo)) {
    amigos.push(nomeAmigo);
    mostrarAmigos();
    document.getElementById('amigo').value = "";
  } else if (amigos.includes(nomeAmigo)) {
    alert("Este amigo já foi adicionado!");  

  } else {
    alert("Digite um nome válido!");
  }
}

function mostrarAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = "";

  amigos.forEach(function(amigo) {
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo!");
    return;
  }

  let indiceSorteado = parseInt(Math.random() * amigos.length); 
  let amigoSorteado = amigos[indiceSorteado];  

  mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigoSorteado) {
  let resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = "";

  document.getElementById('listaAmigos').innerHTML = "";
  
  resultadoElement.innerHTML = `<li>A pessoa sorteada é: ${amigoSorteado}</li>`;

}
