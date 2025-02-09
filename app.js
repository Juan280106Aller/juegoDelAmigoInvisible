let amigos = [];
var inputUsuario;

function agregarAmigo() {
    inputUsuario = document.querySelector('#amigo').value;
    if (inputUsuario==''){
        alert('Por favor, inserte un nombre.');
        return;
    } else {
        limpiarImput();
        agregarInputALista(inputUsuario, '#listaAmigos', '');
        amigos.push(inputUsuario);
        return amigos;
    }
}

function limpiarImput() {
    return document.querySelector('#amigo').value='';
}

function agregarInputALista(nombre, idLista, posibleTexto) {
    let listaPadre = document.querySelector(idLista);
    let listaAgregar = document.createElement('li');
    let textoAgregar = document.createTextNode(posibleTexto + nombre);

    listaAgregar.appendChild(textoAgregar);
    listaPadre.appendChild(listaAgregar);

    return;
}

function sorteoNombres() {
    if (amigos.length==0) {
        alert('Por favor, inserte un nombre.');
        return;
    } else {
        let nombreSorteado = amigos[Math.floor(Math.random()*amigos.length)];
        console.log(nombreSorteado);
        agregarInputALista(nombreSorteado, '#resultado', 'El amigo secreto sorteado es: ');
    }
}