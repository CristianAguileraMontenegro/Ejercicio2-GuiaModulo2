"use strict";
var arregloSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var indicarDeRegion = 0;
function crearDíasBase() {
    var regionesDisponibles = document.getElementsByClassName("tab-pane fade");
    var regionesNombres = document.getElementsByClassName("nav-link");
    for (var i = 0; i < regionesDisponibles.length; i++) {
        var arregloDías = Array(); //Se declara un arreglo por cada region
        for (var j = 0; j < arregloSemana.length; j++) {
            arregloDías.push({ nombreDia: arregloSemana[j], estadoClima: "Soleado", temperatura: 30 });
            console.log(arregloSemana[j]);
        }
        indicarDeRegion++;
        agregarEtiquetas(regionesDisponibles[i], arregloDías, regionesNombres[i]);
        /* agregamos las etiquetas*/
    }
}
function agregarEtiquetas(regionesDisponibles, arregloDías, regionesNombres) {
    var divrow = document.createElement("div"); //se crea una row por cada 7 col para este ejercicio
    divrow.className = "row";
    divrow.id = regionesNombres.textContent;
    var container = document.createElement("div"); //recuerda critian que se crea un container por cada clase por lo tano por eso debe estar aqui
    container.className = "container-fluid";
    for (var i = 0; i < arregloDías.length; i++) {
        var estadoClima = document.createElement("p"); //se deben crear todas las etiquetas por cada ciclo si se deja afuera solo se va a soobrecribir la anterior y solo quedara la ultijma copn contanido
        var temperatura = document.createElement("p");
        var imagenEstado = document.createElement("img");
        var dia = document.createElement("h4");
        console.log(arregloDías[i].nombreDia);
        estadoClima.textContent = arregloDías[i].estadoClima;
        temperatura.textContent = arregloDías[i].temperatura + "°";
        temperatura.id = "temperatura" + i + "" + indicarDeRegion;
        if (arregloDías[i].estadoClima == "Soleado") {
            imagenEstado.src = "imagenes/Sol.jpg";
        }
        if (arregloDías[i].estadoClima == "Tormenta") {
            imagenEstado.src = "imagenes/tormenta.png";
        }
        if (arregloDías[i].estadoClima == "ParcialmenteSoleado") {
            imagenEstado.src = "imagenes/parcialmenteSoleado.jpg";
        }
        if (arregloDías[i].estadoClima == "Lluvia") {
            imagenEstado.src = "imagenes/Gota.png";
        }
        imagenEstado.id = "estado" + i + "" + indicarDeRegion;
        dia.textContent = arregloDías[i].nombreDia;
        var divcol = document.createElement("div");
        divcol.className = "col-md-1";
        divcol.onclick = function () {
            var formulario = document.getElementById("containerFormulario");
            formulario.style.display = "inline";
            var nav = document.getElementById("pills-tabContent");
            nav.style.display = "none";
        };
        divcol.id = arregloDías[i].nombreDia + "" + indicarDeRegion;
        divcol.appendChild(dia);
        divcol.appendChild(imagenEstado);
        divcol.appendChild(temperatura);
        divcol.appendChild(estadoClima);
        divrow.appendChild(divcol);
        container.appendChild(divrow);
        console.log(regionesDisponibles);
    }
    regionesDisponibles.appendChild(container);
}
window.addEventListener("load", crearDíasBase);
