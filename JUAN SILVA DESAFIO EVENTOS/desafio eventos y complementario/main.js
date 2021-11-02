// JUAN LUIS SILVA RIOS
//DESAFIO NRO 9 DE EVENTOS Y DESAFÍO COMPLEMENTARIO

// MI ARRAYS DE PRODUCTOS MÁS VENDIDOS------------------------------------------------------------------------------

const adhesivos = [{ id: 1, nombre: "SIKAFLEX 118", precio: 32 },  
    { id: 2, nombre: "SOUDAL FIX ALL", precio: 41 },
    { id: 3, nombre: "PEGAMENTO TOPEX", precio: 90 }
];
let carritoDeCompras = [];

//TÍTULO DEL TOTAL POR LAS COMPRAS DE SILICONAS--------------------------------------------------------------------

let totalSiliconas = document.createElement("h1");
totalSiliconas.innerText = "El total por tu compra es: (Soles Peruanos):";
document.body.appendChild(totalSiliconas);


let totalSoles = document.createElement("h2");
document.body.appendChild(totalSoles);
totalSoles.innerText = "0";


//TÍTULO PARA EL TOTAL DE UNIDADES COMPRADAS------------------------------------------------------------------------


let unidadesSiliconas = document.createElement("h1");
unidadesSiliconas.innerText = "Las Unidades de Siliconas que vas a comprar son:";
document.body.appendChild(unidadesSiliconas);

let totalUnidades = document.createElement("h2");
totalUnidades.innerText = "0";
document.body.appendChild(totalUnidades);



//CICLO FOR PARA MIS ADHESIVOS Y FUNCIÓN DE AGREGAR AL CARRITO-----------------------------------------------------

for (const adhesivo of adhesivos) {  

    document.getElementById(`${adhesivo.id}`).onclick = () => agregarAlCarrito(`${adhesivo.id}`);
}

function agregarAlCarrito(id) {
    carritoDeCompras.push(adhesivos[id - 1]);  
    console.log(carritoDeCompras);
    calcularTotalCarrito();
}


//BOTÓN PARA VACIAR MI CARRITO DE COMPRAS-------------------------------------------------------------------------

let botonVaciar = document.createElement("h4");
botonVaciar.setAttribute("id", "vaciar");
botonVaciar.innerText = "PRESIONA ..¡¡AQUÍ!!.. PARA VACIAR TU CARRITO DE COMPRAS.";
document.body.appendChild(botonVaciar);
botonVaciar.onclick = () => {
    carritoDeCompras = [];
    totalSoles.innerText = "0";
    totalUnidades.innerText = "0";
}
console.log(carritoDeCompras);

function calcularTotalCarrito() {
    let total = 0;
    for (const prod of carritoDeCompras) {
        total += prod.precio;
        console.log(total);
    }
    totalSoles.innerText = total;
    totalUnidades.innerText = carritoDeCompras.length;
}


