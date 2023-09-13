/*Definición del problema: Sistema de Gestión de Biblioteca
Crear un sistema de gestión de biblioteca que permita administrar libros, revistas y usuarios de la biblioteca.
Los libros y revistas tienen propiedades como título, autor/editor,
y año de publicación. Los usuarios de la biblioteca tienen propiedades como nombre,
 dirección y número de teléfono. El sistema debe permitir realizar préstamos y devoluciones de libros y revistas.
LibraryItem, Book y Magazine representan elementos de la biblioteca, como libros y revistas, y sus respectivas propiedades.
User representa un usuario de la biblioteca con propiedades como nombre, dirección y número de teléfono.
Loan representa un préstamo de un elemento de la biblioteca a un usuario.
Library es el sistema de gestión de la biblioteca que administra los elementos, los usuarios y los préstamos. 
Puede agregar elementos y usuarios, realizar préstamos y devoluciones, y mostrar préstamos activos. (editado)*/


//Primero creo las clases
 class LibraryItem{
    private Title: string;
    private Year: number;
    public constructor( title: string, year: number){
    this.Title = title;
    this.Year = year;

    }

    getTitle(){
        return this.Title;
    }

    getYear(){
        return this.Year;
    }

 }
 
 class Book extends LibraryItem{
    private autor: string;
    public constructor(title:  string, year: number, autor: string){
        super(title,year);
        this.autor = autor;
    }
    getAutor() {
       return this.autor
    } 
}
 
 class Magazine extends LibraryItem {
    private editor: string;
    public constructor (title:  string, year: number, editor: string){
        super(title,year);
        this.editor = editor;
    }

    getEditor(){
     return this.editor; 
    }

 }

 class User{
    private name: string;
    private address: string;
    private phoneNumber: number;

    public constructor(name:string, address: string, phoneNumber:number){
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    getName(): string{
        return this.name;
    }
    getAddress(): string{
        return this.address;
    }
    getPhoneNumber(): number {
        return this.phoneNumber;
    }

 }
 
 class Loan{
    private item: LibraryItem;
    private user: User;
    private dueDate: Date;
     public constructor(item: LibraryItem, user: User, dueDate: Date){
        this.item = item;
        this.user = user;
        this.dueDate = dueDate;

     }

 }
 class Library{}
