import Swal from 'sweetalert2';
class FODA{
    constructor(fortaleza, oportunidad, debilidad, amenaza){
        this.fortaleza = fortaleza,
        this.oportunidad = oportunidad,
        this.debilidad = debilidad,
        this.amenaza = amenaza
    }
}
class Fortalezas{

    constructor(fidelizacionClientes, capacidadInversion, retornoGanancia){
    
    this.fidelizacionClientes = fidelizacionClientes,
    
    this.capacidadInversion = capacidadInversion,
    
    this.retornoGanancia = retornoGanancia,
    
    this.total = fidelizacionClientes + capacidadInversion +retornoGanancia;
    
    }
  }

class Debilidades {
    constructor(personalNoCapacitado,malaUbicacion,disminucionCalidad){
        
        this.personalNoCapacitado = personalNoCapacitado;
        
        this.malaUbicacion = malaUbicacion;
        
        this.disminucionCalidad = disminucionCalidad;

        this.total = personalNoCapacitado + malaUbicacion + disminucionCalidad;
    }
}

class Oportunidades {
    constructor(crecimientoIndustria,bajosImpuestos,participacionEvento){
        
        this.crecimientoIndustria = crecimientoIndustria;
        
        this.bajosImpuestos = bajosImpuestos;
        
        this.participacionEvento = participacionEvento;

        this.total = crecimientoIndustria, bajosImpuestos, participacionEvento;
    }
}

class Amenazas {
    constructor(aumentoCompetencia,aumentoInsumos,leyes){

      this.aumentoCompetencia = aumentoCompetencia;

      this.aumentoInsumos = aumentoInsumos;

      this.leyes = leyes;
      
      this.total = aumentoCompetencia + aumentoInsumos + leyes;
    }
}
const crecimiento = [
    "Estrategia Ofensiva",
    "Desarrollo de nuevos productos", 
    "Desarrollo de nuevos mercados",
    "Integraciones",
    "Fusiones y adquisiciones",                            
]
const estrategiaSupervivencia = [
    "Venta de activos improductivos",
    "Recorte de la cartera de productos",
    "Resizing (Redimensionar el tamaño de la empresa a partir de los procesos)",    
]
const defensa = [
    "Estrategia de reorientación",
    "Venta de activos improductivos",
    "Recorte de la cartera de productos",
    "Resizing (Redimensionar el tamaño de la empresa a partir de los procesos)",    
]
const reenfoque = [
    "Estrategia de asosiación",
    "Mejora de la cartera de productos",
    "Mejora de la calidad de los productos",
    "Mejora de la gestión de recursos humanos",
]

/*function nuevoFODA(){
    alert("Aqui ingresara los puntos de cada item")
    //Creamos con prompt un objeto fortalezas, que luego será parte del objeto FODA
    let fortalezaIngresada = new Fortalezas(parseInt(prompt("Ingrese primer fortaleza")),parseInt(prompt("Ingrese segunda fortaleza")),parseInt(prompt("Ingrese tercera fortaleza")));
    //Crear de igual manera a  O D A
    let oportunidadIngresada = new Oportunidades(parseInt(prompt("Ingrese primer oportunidad")),parseInt(prompt("Ingrese segunda oportunidad")),parseInt(prompt("Ingrese tercera oportunidad")));
    let debilidadIngresada = new Debilidades(parseInt(prompt("Ingrese primer debilidad")),parseInt(prompt("Ingrese segunda debilidad")),parseInt(prompt("Ingrese tercera oportunidad")));
    let amenazaIngresada = new Amenazas(parseInt(prompt("Ingrese primer amenaza")),parseInt(prompt("Ingrese segunda amenaza")),parseInt(prompt("Ingrese tercera amenaza")));
    //Objeto foda compuesto de objetos anteriores
    const nuevoFODA = new FODA(fortalezaIngresada, oportunidadIngresada, debilidadIngresada, amenazaIngresada)
    return nuevoFODA
}*/


//nuevoFODA();

//en los if iría nuevoFODA.fortaleza.total > nuevoFoda.debilidad.total
 /*if ((nuevoFODA.fortaleza.total > nuevoFODA.debilidad.total)&&(nuevoFODA.oportunidad.total > nuevoFODA.amenaza.Total)){
    console.log(crecimiento);
 }
 else if ((nuevoFODA.debilidad.total > nuevoFODA.fortaleza.total)&&(nuevoFODA.amenaza.total > nuevoFODA.oportunidad.total)){
    console.log(estrategiaSupervivencia);
 }

else if ((nuevoFODA.fortaleza.total > nuevoFODA.debilidad.total)&&(nuevoFODA.amenaza.total > nuevoFODA.oportunidad.total)){
   console.log(defensa)};


/else if ((nuevoFODA.debilidad.total > nuevoFODA.fortaleza.total)&&(nuevoFODA.oportunidad.total > nuevoFODA.amenaza.total)){
     console.log(reenfoque)
 };*/

//Capturo el btn
let buttonCapturar = document.getElementById("buttonCapturar")
//Capturo los inputs
let fortalezaInput = document.getElementById("fortaleza")
let oportunidadInput = document.getElementById("oportunidad")
let debilidadInput = document.getElementById("debilidad")
let amenazaInput = document.getElementById("amenaza")
//Asigno evento al btn
buttonCapturar.addEventListener('click', ()=>{
    //Hago que al momento en que hago click al btn, se lea el valor de cada input
    //lo guardo en un new FODA
    let foda = new FODA("Fortalezas "+ fortalezaInput.value, "Oportunidades " + oportunidadInput.value, "Debilidades " + debilidadInput.value, "Amenazas "+ amenazaInput.value)
    //Veo que funciona por console
    console.log(foda)
    localStorage.setItem('datos', JSON.stringify(foda));
    let guardado = localStorage.getItem('datos');

    console.log('Objeto obtenido: ', JSON.parse(guardado));
return foda;
})

// Creamos una funcion con un alert de sweetalert para el boton capturar
function btnCapturarAlert(){
    Swal.fire({
        title: "Se han guardado sus datos",
        text:  "Felicitaciones",
        icon : succes,
    })
}

buttonCapturar.addEventListener('click',()=>{
    btnCapturarAlert(buttonCapturar);
})

/*function arregloFiltro(arreglo, prueba) {
    const arregloFiltrado = [];
    for (let elemento of arreglo) {
        if (prueba(elemento)) {
            arregloFiltrado.push(elemento);
        }
    }
    return arregloFiltrado;
};*/