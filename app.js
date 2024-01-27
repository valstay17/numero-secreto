let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos)
    if(numeroSecreto===numeroUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ==1) ? 'vez' : 'veces'}`)
        
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        //El usuario no acertó
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
document.querySelector('#valorUsuario').value = '';
   
}

function condicionesInicailes(){
    asignarTextoElemento('h1','juego');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //inidicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos 
    condicionesInicailes();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //Si ya sorteamos los números
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon los números posibles');
    }else{
        //si el número generado esta en la lista
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

condicionesInicailes();

