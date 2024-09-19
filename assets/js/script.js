let listaNombresGastos = [];
let listaValordeGastos = [];

function clickBoton(){
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto =  document.getElementById("valorGasto").value;
    
    
    listaNombresGastos.push(nombreGasto);
    listaValordeGastos.push(valorGasto);
    
    
    actualizarListaGastos();
}
function actualizarListaGastos(){

   const listaelementos = document.getElementById("listaDeGastos");
   const totalElementos = document.getElementById("totalGastos");
    
    let htmlLista = "";

    let totalGastos = 0; 

    listaNombresGastos.forEach((elemento, posicion) =>{
        const valorGasto = Number(listaValordeGastos [posicion]);
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
        <button onclick="eliminargasto(${posicion});">Eliminar</button>
        </li>`;



        totalGastos += Number(valorGasto);

    });
    listaelementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();

}
function limpiar() {
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
}
function eliminargasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValordeGastos.splice(posicion,1);
    actualizarListaGastos();
}