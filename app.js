const frutas = ["🍌Banana", "🍓Fresa", "🍎Manzana"];
const carrito = [];

let mensaje = `Frutas disponibles: 
 `;
let cont = 1;

frutas.forEach((e) => {
  mensaje += `${cont}- ${e}
 `;
  cont++;
});

mensaje += `${cont}-🛒Ver carrito`;

let opcion;
let datosCarrito;

do {
  opcion = parseInt(prompt(mensaje));

  switch (opcion) {
    case 1:
      carrito.push("Banana");
      break;
    case 2:
      carrito.push("Fresa");
      break;
    case 3:
      carrito.push("Manzana");
      break;
    case 4:
      datosCarrito = "Carrito de compras:\n"; // Reiniciar datosCarrito antes de mostrarlo
      carrito.forEach((e) => (datosCarrito += `${e}\n`));
      alert(datosCarrito);
      break;
    default:
      alert("La opción ingresada no es correcta");
      break;
  }
} while (confirm("¿Deseas comprar otra fruta?"));





// ejemplo map:
let mapa = new Map();
mapa.set(0, { nombre: "Danyel" });
mapa.set(1, { nombre: "jorge" });

console.log(mapa.get(1).nombre);
