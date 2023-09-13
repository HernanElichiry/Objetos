
class Motor{
    private tipo: string;
    public constructor(tipo:string){
    this.tipo = tipo;
}
}

class Automovil{
    private Marca: string;
    private Modelo: string;
    private Color: string;
    private Anio: number;
    private Motor: Motor;

    public constructor (Marca: string, Modelo: string, Color: string, Anio: number, Motor: Motor){
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Color = Color;
        this.Anio = Anio;
        this.Motor = Motor;
    }
    
}

class AutoDeCarrera extends Automovil{
    private velocidad: number; 
    constructor (Marca: string, Modelo: string, Color: string, Anio: number, Motor: Motor, velocidad: number){
       super(Marca, Modelo, Color, Anio, Motor)
       this.velocidad = velocidad;
    }

    getSpeed(acelerar: number){
       this.velocidad = acelerar; 
    }

    speedStatus(): number{
        return this.velocidad;
    }

}

const motorNaftero = new Motor("Naftero");
const autoDeTC = new AutoDeCarrera("ford", "focus", "rojo", 2012, motorNaftero, 100);
autoDeTC.getSpeed(500);
console.log( autoDeTC.speedStatus()); 