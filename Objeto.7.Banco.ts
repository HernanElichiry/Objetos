// el sufijo "enum"// los enum son un tipo al igual que un string o un number.Los enum son un tipo de dato en TypeScript. 
//Esta característica no es una extensión de JavaScript, sino una peculiaridad propia de TypeScript.
//En pocas palabras un enum se encarga de juntar en un solo tipo de dato un conjunto de constantes.
//permite crear un conjunto de constantes de una manera más ordenada.
// https://dev.to/duxtech/fundamentos-de-typescript-6-enum-27dj 

enum AccountTypeEnum {
    CuentaCorriente = "Cuenta Corriente",
    CajaDeAhorro = "Caja de Ahorro",
    CuentaSueldo = "Cuenta Sueldo",

}

// atraves del mecanimos de composicion, creamos una clase que luego formara parte de otra clase pero como tipo de una variable

class AccountType {
    private Type: AccountTypeEnum;
    public constructor(Type: AccountTypeEnum){
        this.Type = Type;
    }
}


//Primero creo la clase molde y establezo las propiedades 
export class BankAccount {
    private owner: string;
    private balance: number;
    private accountType: AccountType; //ej cuenta corriente


    //creo el constructor metodo por el cual voy a crear instancias
   public constructor(owner: string, accountType: AccountTypeEnum) {
        this.owner = owner;
        this.balance = 0;
        this.accountType = new AccountType(accountType);
    }

    //metodo 1. deposito
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
    } }

    //metodo 2. retiro
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Ha retirado $${amount} de su cuenta de manera exitosa`)
        } else 
                console.log(`Su cuenta de tipo: ${this.accountType} No tiene salso suficiente`)
        
    } 
    
    //metodo 3. obtener saldo.
    getBalance(): void {
        console.log(`El saldo de su cuenta es de $${this.balance} (Pesos)`) ;
    }
}
    

//porque hacemos todo esto? por seguridad

const CuentaNamberOne = new BankAccount("hernan", AccountTypeEnum.CajaDeAhorro);
CuentaNamberOne.deposit(1000);
CuentaNamberOne.getBalance;

    

