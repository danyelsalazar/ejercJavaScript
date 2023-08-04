// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
// radio del círculo lo proporcionará el usuario.

class Circulo{
    constructor(radio){
        this.radio = radio;
        this.area = 0;
        this.perimetro = 0;
    }

    calcularArea(){
        this.area = 3.14159 * (this.radio ** 2);
        return this.area.toFixed(2);
    }
    calcularPerimetro(){
        this.perimetro = 2 * 3.14159 * this.radio;
        return this.perimetro.toFixed(2);
    }
}

function creaCircunferencia(){
    const radio = parseFloat(prompt("Escribe el radio de la circunferencia"));
    const circucunferencia = new Circulo(radio);
    console.log(circucunferencia.calcularArea());
    console.log(circucunferencia.calcularPerimetro());
}

creaCircunferencia();




// forrma con funcion constructora:

// function Circulo(radio) {
//     this.radio = radio;
//     this.area = 0;
//     this.perimetro = 0;

//     this.calcularArea = function() {
//         this.area = 3.14159 * (this.radio * this.radio);
//     };

//     this.calcularPerimetro = function() {
//         this.perimetro = 2 * 3.14159 * this.radio;
//     };
// }

// const miCirculo = new Circulo(5);
// miCirculo.calcularArea();
// miCirculo.calcularPerimetro();

// console.log("Área del círculo:", miCirculo.area);
// console.log("Perímetro del círculo:", miCirculo.perimetro);

 //En este ejemplo, hemos definido dos métodos calcularArea() y calcularPerimetro() dentro de la función constructora Circulo. Estos métodos pueden acceder a las propiedades de this (como this.radio) y actualizar las propiedades this.area y this.perimetro.

 //Es importante tener en cuenta que si tienes múltiples instancias de objetos creadas con la función constructora, cada una tendrá su propia copia de los métodos. Si tienes muchos objetos y los métodos son complejos, esto puede llevar a un uso ineficiente de memoria, ya que cada instancia tiene su propia copia del método. En tales casos, es más eficiente definir los métodos en el prototipo del objeto.





