
class Reptil {
    nombre: string;
    tipo: string;
    habitat: string;

    constructor(nombre: string, tipo: string, habitat: string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.habitat = habitat;
    }

    moverse() {
        console.log(`${this.nombre} se desplaza.`);
    }

    reproducirse() {
        console.log(`${this.nombre} se reproduce.`);
    }
}

class Tortuga extends Reptil {
    constructor(nombre: string, habitat: string) {
        super(nombre, "Tortuga", habitat);
    }

    moverse() {
        console.log(`${this.nombre} se mueve lentamente.`);
    }

    esconderse() {
        console.log(`${this.nombre} se esconde en su caparazón.`);
    }
}

class Serpiente extends Reptil {
    constructor(nombre: string, habitat: string) {
        super(nombre, "Serpiente", habitat);
    }

    moverse() {
        console.log(`${this.nombre} se desliza silenciosamente.`);
    }

    veneno() {
        console.log(`${this.nombre} puede ser venenosa.`);
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

// Crear instancias
const tortuga1 = new Tortuga("Tortuguita", "Bosque");
const serpiente1 = new Serpiente("Serpentito", "Desierto");
const lagarto1 = new Lagarto("Lagartito", "Selva");

tortuga1.moverse();
serpiente1.moverse();
lagarto1.moverse();
