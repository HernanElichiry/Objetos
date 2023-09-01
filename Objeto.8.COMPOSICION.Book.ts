
//Creo la clase libro con
class Book {
    private Titulo: string;
    private Autor: string;
    private Estado : boolean;
    
    constructor (Titulo:"", Autor: "",){
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.Estado = true ;
    }

    ReservarLibro(): void {

    }

    DevolverLibro(): void {

    }

    BuscarLibro(): string {
        return this.Titulo;
    }
}


const Socio1 = new Book();
