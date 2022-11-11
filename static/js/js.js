// boton reestablecer
let boton = document.getElementById("reestablecer_btn");
boton.addEventListener("click", (e) => {
  document.getElementById("form_afiliacion").reset();
  // console.log("reseteando");
});

let numero = 0;
// estilos ordenados
let boton2 = document.getElementById("estilos_btn");
boton2.addEventListener("click", () => {
  numero++;
  console.log(numero);
  let estilos = document.getElementsByTagName("link")[0];
  if (numero == 0) {
    estilos.setAttribute("href", "./static/css/estilos.css");
  } else if (numero == 1) {
    estilos.setAttribute("href", "./static/css/retro.css");
    // haciendo visible actividades
    let fieldsetFuturo = document.getElementsByClassName("futuro");
    fieldsetFuturo.className += "visible";
  } else if (numero == 2) {
    estilos.setAttribute("href", "./static/css/futuro.css");
    // haciendo visible actividades
  } else if (numero == 3) {
    numero = 0;
    estilos.setAttribute("href", "./static/css/estilos.css");
  }
});


//-----------------------------------------------Bonus 2 guardo en local----------------------------
let btnRecordar = document.getElementById("recordar");
btnRecordar.addEventListener("click",()=> {
  let btnRecordar = document.getElementById("recordar");
    // si entra en este else es poruqe el boton NO esta hundido y guarda en local estilos para usarse desp
    console.log("Guardo estilos en local");
    // obtengo el estilo actual
    let estilos = document.getElementsByTagName("link")[0].href;
    // guardo en local el estilo actual
    localStorage.setItem("estiloActual", JSON.stringify(estilos))
    // cuando se hace clic sobre el botn cambia la opacidad
    btnRecordar.style.opacity = 0.4
    console.log("Se guardara en Local el estilo: " + JSON.parse(localStorage.getItem("estiloActual"))) 
  }

)

// cada vez que carga la aplicacion va a buscar los estilos al local storage
window.addEventListener("DOMContentLoaded", () => {
  // hago referencia a la etiqueta link
  let estilos = document.getElementsByTagName("link")[0];
  // obtengo el estilo que del local storage
  let recuperoEstilos = JSON.parse(localStorage.getItem("estiloActual")) ||  estilos.setAttribute("href", "./static/css/estilos.css");
  // le seteo a link el estilo que recupere del localstorage
  estilos.setAttribute("href",recuperoEstilos);
  // le agrego opacidad al boton recordar
  btnRecordar.style.opacity= 0.4
  console.log("Window on load. Cargando estilo recordado desde localSt: " + JSON.parse(localStorage.getItem("estiloActual"))); 
})
// -------------------------------------------------------fin bonus 2 ----------------------------



// no cambiar fondo de legend, aplicar blur, y aplicar focus si el estilo actual es SIN ESTILOS CSS
window.addEventListener("DOMContentLoaded", () => {
  let estilos = document.getElementsByTagName("link")[0].href
  let sinCss = estilos.includes("sin")
  console.log(sinCss);

  // si no tiene una hoja de estilos css no hgas nada
  if (sinCss == true){
  }
  // si tiene alguna hoja de estilos css entonces........
  else {
    

// cambiando fondo de legend al desencaddenarse el foco
const inputs = document.getElementsByTagName("input");
// console.log(inputs);

// efecto focus de los inputs
for (let inp = 0; inp < inputs.length; inp++) {
  let legend = document.getElementsByTagName("legend");
  inputs[inp].addEventListener("focus", () => {
    if (inp <= 6) {
      legend[0].style.background = "#2d3c39";
    } else if ((inp == 10) || (inp ==11)) {
      legend[1].style.background = "#2d3c39";
    } else {
      legend[2].style.background = "#2d3c39";
    }
  });
}

// efecto blur de los inputs
for (let inp = 0; inp < inputs.length; inp++) {
  inputs[inp].addEventListener("blur", () => {
    let legend = document.getElementsByTagName("legend");
    legend[0].style.background = "#4b6963";
    legend[1].style.background = "#4b6963";
    legend[2].style.background = "#4b6963";
  });
}

// efecto focus textarea
const textarea = document.getElementsByTagName("textArea");
for (let inp = 0; inp < textarea.length; inp++) {
  textarea[inp].addEventListener("focus", () => {
    console.log("se hizo foco");
    let legend = document.getElementsByTagName("legend");
    legend[0].style.background = "#2d3c39";
  });
}

// efecto blur  textarea
for (let inp = 0; inp < textarea.length; inp++) {
  textarea[inp].addEventListener("blur", () => {
    let legend = document.getElementsByTagName("legend");
    legend[0].style.background = "#4b6963";
  });
}
  }
})





//-----------------------------------------------Bonus 1 estilos aleatorios
let aleatorios = document.getElementById("aleatorio_btn");
aleatorios.addEventListener("click", () => {
  let estilos = document.getElementsByTagName("link")[0];
  // console.log(estilos);
  let numero = Math.random() * 100;
  console.log(numero);
  if (numero < 25) {
    estilos.setAttribute("href", "./static/css/futuro.css");
  } else if ((numero > 25) & (numero < 50)) {
    estilos.setAttribute("href", "./static/css/retro.css");
  }  else if ((numero > 50) & (numero < 75)) {
    estilos.setAttribute("href", "./static/css/estilos.css");
  }
  else {
    estilos.setAttribute("href", "./static/css/sin.css");
  }
  
});




//-----------------------------------------------Bonus 3 select
let bonus3 = document.getElementById("Estilos-Bonus-3");
bonus3.addEventListener("click", (e) => {
  let estilos = document.getElementsByTagName("link")[0];
  if (e.target.value == "Original") {
    estilos.setAttribute("href", "./static/css/estilos.css");
  } else if (e.target.value == "Retro") {
    estilos.setAttribute("href", "./static/css/retro.css");
  } else if (e.target.value == "Futuro") {
    estilos.setAttribute("href", "./static/css/futuro.css");
  } else if (e.target.value == "SinCss") {
    estilos.setAttribute("href", "./static/css/sin.css");
  }
});

//-----------------------------------------------Bonus 4 select
let bonus4 = document.querySelectorAll(".estilos-bonus-4");
bonus4.forEach((e)=> {
  e.addEventListener("click", (e) => {
    let estilos = document.getElementsByTagName("link")[0];
    if (e.target.value == "Original") {
      estilos.setAttribute("href", "./static/css/estilos.css");
    } else if (e.target.value == "Retro") {
      estilos.setAttribute("href", "./static/css/retro.css");
    } else if (e.target.value == "Futuro") {
      estilos.setAttribute("href", "./static/css/futuro.css");
    } else if (e.target.value == "SinCss") {
      estilos.setAttribute("href", "./static/css/sin.css");
    }
  });

})


