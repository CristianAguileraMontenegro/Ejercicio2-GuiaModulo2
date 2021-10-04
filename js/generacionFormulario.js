"use strict";
function crearFormulario() {
    var container = document.createElement("div");
    container.className = "container-fluid";
    container.id = "containerFormulario";
    container.style.display = "none";
    var divRegiones = document.createElement("div");
    divRegiones.className = "col-md-6  col-sm-5";
    var divrow = document.createElement("div");
    divrow.className = "row";
    var divcol = document.createElement("div");
    divcol.className = "col-md-6";
    var form = document.createElement("form");
    form.id = "formularioDia";
    var div = document.createElement("div");
    div.className = "form-group";
    //Hasta arriba es la base del formulario
    //ahora componentes
    var regionesLabel = document.createElement("label");
    regionesLabel.className = "from-label";
    regionesLabel.htmlFor = "regiones";
    var selected = document.createElement("select");
    selected.className = "form-select";
    //selected.ariaLabel="Default select example";
    selected.id = "regiones";
    var selectedDias = document.createElement("select");
    selectedDias.className = "form-select";
    //selected.ariaLabel="Default select example";
    selectedDias.id = "dias";
    /*entreda por tenxo de la nueva temperatura */
    //FALTA LABEL
    var divTemperatura = document.createElement("div");
    divTemperatura.className = "col-md-6  col-sm-5";
    var entradaTemperatura = document.createElement("input");
    entradaTemperatura.type = "number";
    entradaTemperatura.id = "entradaTemperatura";
    /*entreda por tenxo de la nueva temperatura */
    /*radio botones*/
    var divEstadoDelClima = document.createElement("div");
    divEstadoDelClima.className = "col-md-6  col-sm-5";
    var estadoTiempoLabel = document.createElement("label");
    estadoTiempoLabel.className = "from-label";
    estadoTiempoLabel.htmlFor = "estadoDelClima";
    divEstadoDelClima.appendChild(estadoTiempoLabel);
    generarRadioButonesEstadoClima(divEstadoDelClima);
    /*radio botones*/
    //
    var divBotones = document.createElement("div");
    divBotones.className = "col-md-6  col-sm-5";
    var actualizar = document.createElement("button");
    actualizar.textContent = "Actualizar";
    actualizar.id = "actualizar";
    actualizar.type = "button";
    actualizar.onclick = function actualizarDatos() {
        actualizarDatosDias();
    };
    //
    llenarDropBox(selected);
    llenarDropBoxDias(selectedDias);
    divcol.appendChild(regionesLabel);
    divcol.appendChild(selected);
    divcol.appendChild(selectedDias);
    divTemperatura.appendChild(entradaTemperatura);
    divBotones.appendChild(actualizar);
    div.appendChild(divcol);
    div.appendChild(divTemperatura);
    div.appendChild(divEstadoDelClima);
    div.appendChild(divBotones);
    form.appendChild(div);
    divRegiones.appendChild(form);
    container.appendChild(divRegiones);
    //arribar formulario parte del dropdown de regiones
    document.body.appendChild(container);
}
function llenarDropBox(selected) {
    var regionesDisponibles = document.getElementsByClassName("nav-link");
    var arregloDeNombre = Array();
    var optionDefault = document.createElement("option");
    optionDefault.selected;
    //selected.appendChild(optionDefault);
    for (var i = 0; i < regionesDisponibles.length; i++) {
        arregloDeNombre.push(regionesDisponibles[i].textContent); //alamacenas los nombres de las regiones
        var option = document.createElement("option"); //creamos una opcion por cada nombre
        option.value = arregloDeNombre[i]; // se asigna el nombre a value para identificarla mejor que con 0 1 2.. y se damos el contanido
        option.textContent = arregloDeNombre[i];
        selected.appendChild(option);
    }
}
function llenarDropBoxDias(selectedDias) {
    var arregloSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    var optionDefault = document.createElement("option");
    optionDefault.selected;
    //selected.appendChild(optionDefault); //si genero el agregado en este punto se genera un error pero si lo hago enla funcion principal no
    for (var i = 0; i < arregloSemana.length; i++) {
        var option = document.createElement("option"); //el mismo procedimineto anterior solo que con los días en este caso se decidio ocupar el arreglo ya que estos días no cambiaran
        option.value = i.toString();
        option.textContent = arregloSemana[i];
        selectedDias.appendChild(option);
    }
}
function generarRadioButonesEstadoClima(divEstadoDelClima) {
    var cantidadDeEstados = 4;
    for (var i = 0; i < 4; i++) {
        var divFromCheck = document.createElement("div");
        divFromCheck.className = "form-check";
        var radioCheck = document.createElement("input");
        radioCheck.className = "form-check-input-EstadoClima";
        radioCheck.type = "radio";
        radioCheck.id = "Estado" + [i];
        radioCheck.name = "estadoClima";
        var labelCheck = document.createElement("label");
        labelCheck.className = "form-check-label";
        labelCheck.htmlFor = "Estado" + [i];
        if (i == 0) {
            radioCheck.value = "Soleado";
            labelCheck.textContent = "Soleado";
        }
        if (i == 1) {
            console.log("hola");
            radioCheck.value = "Tormenta";
            labelCheck.textContent = "Tormenta";
        }
        if (i == 2) {
            console.log("hola2");
            radioCheck.value = "ParcialmenteSoleado";
            labelCheck.textContent = "ParcialmenteSoleado";
        }
        if (i == 3) {
            console.log("hola3");
            radioCheck.value = "Lluvia";
            labelCheck.textContent = "Lluvia";
        }
        divFromCheck.appendChild(radioCheck);
        divFromCheck.appendChild(labelCheck);
        divEstadoDelClima.appendChild(divFromCheck);
    }
}
function actualizarDatosDias() {
    var regionesDisponibles = document.getElementsByClassName("nav-link"); //nombres regiones
    var regionesSelecionada = document.getElementById('regiones').value;
    var diaSelecionado = document.getElementById('dias').value;
    console.log(diaSelecionado);
    var nuevaTemperatura = document.getElementById("entradaTemperatura");
    var flag = true;
    for (var i = 0; i < regionesDisponibles.length && flag == true; i++) {
        if (regionesSelecionada == regionesDisponibles[i].textContent) {
            for (var j = 0; j < 6 && flag == true; j++) {
                if (diaSelecionado == j) {
                    var temperaturaOriginal = document.getElementById("temperatura" + j + "" + (i + 1));
                    console.log("sadasda");
                    temperaturaOriginal.textContent = nuevaTemperatura.value + "°";
                    flag = false;
                    var estadoClimaSeleccionado = document.getElementsByClassName("form-check-input-EstadoClima");
                    for (var a = 0; a < estadoClimaSeleccionado.length; a++) {
                        if (estadoClimaSeleccionado[a].checked) {
                            var estadoClimaOriginal = document.getElementById("estado" + j + "" + (i + 1));
                            if (estadoClimaSeleccionado[a].value == "Soleado") {
                                estadoClimaOriginal.src = "imagenes/Sol.jpg";
                            }
                            if (estadoClimaSeleccionado[a].value == "Tormenta") {
                                estadoClimaOriginal.src = "imagenes/tormenta.png";
                            }
                            if (estadoClimaSeleccionado[a].value == "ParcialmenteSoleado") {
                                estadoClimaOriginal.src = "imagenes/parcialmenteSoleado.jpg";
                            }
                            if (estadoClimaSeleccionado[a].value == "Lluvia") {
                                estadoClimaOriginal.src = "imagenes/Gota.png";
                            }
                        }
                    }
                }
            }
        }
    }
    var nav = document.getElementById("pills-tabContent");
    nav.style.display = "inline";
    var formulario = document.getElementById("containerFormulario");
    formulario.style.display = "none";
    /*for(let i = 0; i < regionesDisponibles.length; i++)
    {
        if(regionesDisponibles[i].textContent == regionesSelecionada)
        {
            let rowDeRegionSelecionada:any = document.getElementById(regionesSelecionada);
            let idDia:string = diaSelecionado+""+(i+1);
            let colDeDíaSelecionado:any = document.getElementById(idDia)?.children;

            for(let j = 0; j < colDeDíaSelecionado.length; j++)
            {
                if(colDeDíaSelecionado[i].id = "temperatura01"){
                    colDeDíaSelecionado[i].textContent = nuevaTemperatura;
                }
            }

        }
    }*/
}
window.addEventListener("load", crearFormulario);
window.addEventListener("load", llenarDropBox);
