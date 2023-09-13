/*Ejercicio para empezar en clase y terminar de tarea sobre clase de deportistas olimpicos:
Crear un super clase llamada Deportista (que tenga al menos 3 atributos [al menos 1 atributo en protected] y 2 métodos ademas de los respectivos constructores. Crear 3 subclases hijas de esa superclase Deportista, cada una con al menos un nuevo método especifico y un atributo extra tambien.
Bonus: una de las sub clases podria estar compuesta por otras clases*/

class Deportista{
    private nombre: string;
    private edad: number;
    protected altura: string;

    public constructor(nombre: string,edad: number,altura: string){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;

    }

entrenar(){

}

descansar(){

}

}

class Boxeador extends Deportista{
    private peso: number;

    public constructor(nombre: string,edad: number,altura: string, peso: number){
        super(nombre,edad,altura)
        this.peso = peso;

    }

    boxear(){

    }


}


class Futbolista extends Deportista{
    private posicion: string;

    public constructor(nombre: string,edad: number,altura: string, posicion: string){
        super(nombre,edad,altura)
        this.posicion = posicion;

    }
    
    correr(){

    }

    patearAlArco(){

    }


}

class Nadador extends Deportista{
    private estilo: string;

    public constructor(nombre: string,edad: number,altura: string, estilo: string,){
        super(nombre,edad,altura)
        this.estilo = estilo;

    }
    
    nadarMariposa(){

    }

    nadarPecho(){


    }


}


class Lagarto extends Reptil {
    constructor(nombre: string, habitat: string) {
        super(nombre, "Lagarto", habitat);
    }

    cambiarPiel() {
        console.log(`${this.nombre} está mudando de piel.`);
    }
}




