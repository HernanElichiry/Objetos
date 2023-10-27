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
class LibraryItem {
    private title: string;
    private year: number;

    public constructor(title: string, year: number) {
        this.title = title;
        this.year = year;
    }

    getTitle(): string {
        return this.title;
    }

    getYear(): number {
        return this.year;
    }
}

class Book extends LibraryItem {
    private author: string;

    public constructor(title: string, year: number, author: string) {
        super(title, year);
        this.author = author;
    }

    getAuthor(): string {
        return this.author;
    }
}

class Magazine extends LibraryItem {
    private editor: string;

    public constructor(title: string, year: number, editor: string) {
        super(title, year);
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }
}

class User {
    private name: string;
    private address: string;
    private phoneNumber: string;

    public constructor(name: string, address: string, phoneNumber: string) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    getName(): string {
        return this.name;
    }

    getAddress(): string {
        return this.address;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }
}

class Loan {
    private item: LibraryItem;
    private user: User;
    private dueDate: Date;

    public constructor(item: LibraryItem, user: User, dueDate: Date) {
        this.item = item;
        this.user = user;
        this.dueDate = dueDate;
    }

    getItem(): LibraryItem {
        return this.item;
    }

    getUser(): User {
        return this.user;
    }

    getDueDate(): Date {
        return this.dueDate;
    }
}

class Library {
    private items: LibraryItem[] = [];
    private users: User[] = [];
    private loans: Loan[] = [];

    // Método para agregar un elemento (libro o revista) al catálogo
    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    // Método para agregar un usuario a la biblioteca
    addUser(user: User): void {
        this.users.push(user);
    }

    // Método para realizar un préstamo de un elemento a un usuario
    lendItem(item: LibraryItem, user: User, dueDate: Date): void {
        if (this.items.includes(item) && this.users.includes(user)) {
            const loan = new Loan(item, user, dueDate);
            this.loans.push(loan);
        }
    }

    // Método para procesar una devolución de un elemento por un usuario
    returnItem(item: LibraryItem, user: User): void {
        this.loans = this.loans.filter((loan) => !(loan.getItem() === item && loan.getUser() === user));
    }

    // Método para mostrar los préstamos activos
    showActiveLoans(): void {
        for (const loan of this.loans) {
            const item = loan.getItem();
            const user = loan.getUser();
            const dueDate = loan.getDueDate();
            console.log(`Préstamo: ${item.getTitle()} a ${user.getName()} hasta el ${dueDate}`);
        }
    }

    // Método para obtener un elemento del catálogo por índice
    getItem(index: number): LibraryItem {
        return this.items[index];
    }

    // Método para obtener un usuario por índice
    getUser(index: number): User {
        return this.users[index];
    }

    // Método para obtener un préstamo por índice
    getLoan(index: number): Loan {
        return this.loans[index];
    }
}

// Ejemplo de uso:
const library = new Library();
const book1 = new Book("El Libro de la Selva", 1894, "Rudyard Kipling");
const magazine1 = new Magazine("National Geographic", 2023, "National Geographic Society");
const user1 = new User("Usuario A", "Calle Principal 123", "123-456-7890");

library.addItem(book1);
library.addItem(magazine1);
library.addUser(user1);

library.lendItem(book1, user1, new Date("2023-11-15"));
library.lendItem(magazine1, user1, new Date("2023-11-10"));

// Obtener elementos, usuarios y préstamos por índice
const item = library.getItem(0);
const user = library.getUser(0);
const loan = library.getLoan(0);
console.log(item.getTitle()); // Devuelve el título del elemento
console.log(user.getName()); // Devuelve el nombre del usuario
console.log(loan.getDueDate()); // Devuelve la fecha de vencimiento del prés