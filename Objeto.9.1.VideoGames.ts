class Personaje{
    private nombre: string;
    private vida: number;
    private energia : number;

    constructor(nombre: string, vida: number = 3, energia: number = 20) {
        this.nombre= nombre;
        this.vida= vida;
        this.energia= energia;
    }
   
    getnombre(): void {
       console.log(this.nombre);
        ;
    }

    atacar() : void {
        this.energia= this.energia-5;
        console.log("energia: ", this.energia)
        if(this.energia === 0){
            this.vida=this.vida-1;
        console.log("Te quedan", this.vida, "vidas");
        }         
    }

    curar(): void {
    this.energia= this.energia+5;
    console.log("energia: ",this.energia);
    if(this.energia===20) {
        this.vida=this.vida+1
        console.log("conseguiste otra vida, te quedan:", this.vida);
        
    }
    }
    
    info(): void {
        console.log("nombre:" ,this.nombre, "\n vidas:", this.vida, "\n energia:",this.energia);
    }
    
}

class Guerrero extends Personaje {
    private fuerza:number;

    constructor(nombre:string,fuerza:number=50){
        super(nombre);
        this.fuerza=fuerza;
    }

    usarEscudo(): void{
        this.fuerza= this.fuerza-5;
        console.log("fuerza:", this.fuerza);
        
    }
    
}

class Mago extends Personaje {
    private mana: number;
    constructor (nombre:string,mana: number = 50) {
        super(nombre);
        this.mana= mana
    }
    lanzarHechizo(): void{
        this.mana= this.mana-5;
        console.log("mana:", this.mana);
        
        
    } 

}

const mago01 = new Mago("Gollum")
console.log(mago01);
mago01.atacar()
mago01.atacar()
mago01.atacar()
mago01.atacar()
mago01.curar()
mago01.curar()
mago01.getnombre
mago01.info()
mago01.lanzarHechizo()
mago01.lanzarHechizo()
mago01.atacar()
mago01.atacar()
mago01.curar()
mago01.curar()
mago01.curar()
mago01.curar()