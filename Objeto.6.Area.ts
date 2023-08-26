export class Forma {
   protected alto: number;
   protected ancho: number;

    constructor(alto: number, ancho: number) {
        this.alto = alto;
        this.ancho = ancho;
    }
}

class Triangulo extends Forma {
        constructor(alto: number, ancho: number){
        super(alto, ancho);    
        }
        
    calcularArea(): number {
        return (this.alto * this.ancho / 2);
    }
}

class Rectangulo extends Forma {
    constructor(alto: number, ancho: number){
        super(alto, ancho);    
        }

    calcularArea(): number {
        return this.alto * this.ancho;
    }
}


const Rectangulo1 = new Rectangulo(5,5);
console.log(Rectangulo1.calcularArea());
const Triangulo1 = new Triangulo(6,6);
console.log(Triangulo1.calcularArea());


