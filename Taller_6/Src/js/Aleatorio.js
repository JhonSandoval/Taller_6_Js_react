

let numero_Aleatorio = Math.floor(Math.random() * 100) + 1;

const adivinar = document.querySelector('.adivinar');
const ultimo_Resultado = document.querySelector('.ultimo_Resultado');
const bajoOalto = document.querySelector('.bajoOalto');


const boton_adivinar = document.querySelector('.boton_adivinar');
const Campo_adivinar = document.querySelector('.Campo_adivinar');

let adivinar_Contador = 1;
let boton_Reinicio;

function adivina_control() {

    let Adivinar_usuario = Number(Campo_adivinar.value);
    
    if (adivinar_Contador === 1 ){
        adivinar.textContent = 'Intentos Anteriores: ';
    }
    adivinar.textContent += Adivinar_usuario + ' ';

    if (Adivinar_usuario === numero_Aleatorio){
        ultimo_Resultado.textContent = 'Felicidades Adivinistaste';
        ultimo_Resultado.style.backgroundColor = 'green';
        bajoOalto.textContent = '';
        setGameOver();
    }
    else if (adivinar_Contador === 10) {

        ultimo_Resultado.textContent = '¡¡¡Fin del juego!!!';
        setGameOver();

    } 
    else 
    {

        ultimo_Resultado.textContent = '¡Incorrecto!';
        ultimo_Resultado.style.backgroundColor = 'red';

    if (Adivinar_usuario < numero_Aleatorio) 
        {
            bajoOalto.textContent = '¡El número es muy bajo!';
        } 
    else if (Adivinar_usuario > numero_Aleatorio) 
        {
            bajoOalto.textContent = '¡El número es muy grande!';
        }
    }

    adivinar_Contador++;
    Campo_adivinar.value = '';
    Campo_adivinar.focus();

}

boton_adivinar.addEventListener('click', adivina_control);

function setGameOver() {
    Campo_adivinar.disabled = true;
    boton_adivinar.disabled = true;
    boton_Reinicio = document.createElement('button');
    boton_Reinicio.textContent = 'Inicia Juego de Nuevo';
    boton_Reinicio.style.color = 'blue';
    document.body.appendChild(boton_Reinicio);
    boton_Reinicio.addEventListener('click', resetGame);
  }

  function resetGame() {
    adivinar_Contador = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }

    boton_Reinicio.parentNode.removeChild(boton_Reinicio);
    Campo_adivinar.disabled = false;
    boton_adivinar.disabled = false;
    Campo_adivinar.value = '';
    Campo_adivinar.focus();
    ultimo_Resultado.style.backgroundColor = 'white';
    numero_Aleatorio = Math.floor(Math.random() * 100) + 1;

  }

