interface Clima{
    nombreDia:string;
    estadoClima:string;
    temperatura:number;
}

let arregloSemana:Array<string> = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let indicarDeRegion:number = 0;

function crearDíasBase(){
   
    let regionesDisponibles:any = document.getElementsByClassName("tab-pane fade");
    let regionesNombres:any = document.getElementsByClassName("nav-link");
    for(let i = 0; i < regionesDisponibles.length ; i++)
    {
        let arregloDías = Array<Clima>();//Se declara un arreglo por cada region
        for(let j = 0; j < arregloSemana.length; j++)
        {
            arregloDías.push({nombreDia:arregloSemana[j], estadoClima:"Soleado", temperatura:30}); 
            console.log(arregloSemana[j]);
        }
        indicarDeRegion++;
        agregarEtiquetas(regionesDisponibles[i], arregloDías, regionesNombres[i]);

        /* agregamos las etiquetas*/ 
    }

}


function agregarEtiquetas(regionesDisponibles:any,arregloDías:any, regionesNombres:any){
    
   
    
    let divrow:any = document.createElement("div"); //se crea una row por cada 7 col para este ejercicio
    divrow.className = "row";
    divrow.id = regionesNombres.textContent;

    let container:any = document.createElement("div"); //recuerda critian que se crea un container por cada clase por lo tano por eso debe estar aqui
    container.className = "container-fluid";
    
    for(let i = 0; i < arregloDías.length; i++)
    {
        
        let estadoClima:any = document.createElement("p"); //se deben crear todas las etiquetas por cada ciclo si se deja afuera solo se va a soobrecribir la anterior y solo quedara la ultijma copn contanido
        let temperatura:any = document.createElement("p");
        let imagenEstado:any = document.createElement("img");
        let dia:any = document.createElement("h4");

        console.log(arregloDías[i].nombreDia);
        estadoClima.textContent = arregloDías[i].estadoClima;
        temperatura.textContent = arregloDías[i].temperatura+"°";
        temperatura.id = "temperatura"+i+""+indicarDeRegion;

        
        if(arregloDías[i].estadoClima == "Soleado"){
            imagenEstado.src="imagenes/Sol.jpg";
        }

        if(arregloDías[i].estadoClima == "Tormenta"){
            imagenEstado.src="imagenes/tormenta.png";
        }

        if(arregloDías[i].estadoClima == "ParcialmenteSoleado"){
            imagenEstado.src="imagenes/parcialmenteSoleado.png";
        }

        if(arregloDías[i].estadoClima == "Lluvia"){
            imagenEstado.src="imagenes/Gota.png";
        }

        imagenEstado.id = "estado"+i+""+indicarDeRegion;

        dia.textContent = arregloDías[i].nombreDia;

        
        let divcol:any = document.createElement("div");
        divcol.className="col-md-1";
        divcol.onclick = function(){ 
            let formulario:any = document.getElementById("containerFormulario");
            formulario.style.display = "inline";
            let nav:any = document.getElementById("pills-tabContent");
            nav.style.display = "none";
        }; 
        divcol.id = arregloDías[i].nombreDia+""+indicarDeRegion;

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
