abstract class Vehiculo {
    private Marca: string;
    private Modelo: string;
    private Ano: number;
    protected Velocidad: number;
    protected Encender: boolean;

    public constructor(Marca: string, Modelo: string, Ano: number, Velocidad: number, Encender: boolean){
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Ano = Ano;
        this.Velocidad = Velocidad;
        this.Encender = Encender; 
    }
 
    encender():void{}
    apagar():void{}
    abstract acelerar():void;
    abstract frenar():void;
    obtenerInfo():void{
        console.log(`Marca: ${this.Marca} Modelo: ${this.Modelo} Anio: ${this.Ano} Velocidad: ${this.Velocidad}`);
    }

}

class AutoDeportivo extends Vehiculo {
 public accesoriosDeportivos:string;

 constructor(Marca: string, Modelo: string, Ano: number, Velocidad: number, Encender: boolean, accesoriosDeportivos: string){
    super(Marca,Modelo,Ano,Velocidad,Encender);
    this.accesoriosDeportivos = accesoriosDeportivos;

 }

    acelerar():void{
        this.Velocidad += 50;
    }
    
    frenar():void{
        this.Velocidad -= 10;
    } 

}


class AutoDeCiudad extends Vehiculo {
   
    constructor(Marca: string, Modelo: string, Ano: number, Velocidad: number, Encender: boolean){
       super(Marca,Modelo,Ano,Velocidad,Encender);      
   
    }
   
       acelerar():void{
           this.Velocidad += 50;
       }
       
       frenar():void{
           this.Velocidad -= 10;
       } 
   
   }




const Mustang = new AutoDeportivo ("Ford", "mustang", 1969, 0 , false, "Aleron");
const Clio = new AutoDeCiudad ("Renault", "Clio", 2013, 0 , false);


Mustang.encender();
Mustang.acelerar();
console.log(Mustang.accesoriosDeportivos);