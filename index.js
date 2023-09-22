document.addEventListener("DOMContentLoaded", function () {
  const messageElement = document.getElementById("message");
  const changeMessageButton = document.getElementById("changeMessage");

  changeMessageButton.addEventListener("click", function () {
    messageElement.textContent = "TEST";
  });
});

// var persona = {
//   nombre: "Juan",
//   Apellido: "Ramirez",
//   correo: "example@example.com",
//   color: "Rojo",
// };

var carro = {
  modelo: "2022",
  color: "Azul",
  nuevoColor: function (color) {
    this.color = color;
  },
  asdf: (color) => {this.color = color},
  acelerar: function () { console.log('brum brumm')},
};

function cambiarColor(carro) {
  carro.color = "Amarillo";
}

console.log(carro);
carro.nuevoColor(carro);
cambiarColor(carro);

console.log(carro);

// const resultado = { ...carro, ...persona };

// const numeros = [10, 20, 30, 40, 50, 20];
// console.log("ANTES", numeros);

// numeros.forEach(function (numero) {
//   numero = numero + 1;
//   console.log(numero);
// });

// function dividir(a, b = 2) {
//   var division = a / b;

//   sumar(division);
// }

// function sumar(c) {
//   c = c + 10;
//   return c;
// }

// dividir(20, 4);

let i = 1;

while (i < 10) {
  console.log(i);
  i++;
}


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => {
    const val = currentValue *2;
    return accumulator + val;YaNNo 
  },
  initialValue
);