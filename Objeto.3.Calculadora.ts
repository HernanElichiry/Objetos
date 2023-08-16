/*class Calculadora {
    isOn: boolean;
    numero1: number;
    numero2: number;

    constructor(on: boolean = false, numberA: number = 0, numberB: number = 0,) {
      this.numero1 = numberA;
      this.numero2 = numberB;
     
    }*/


    
    class Calculator {
      public Sum(a: number, b: number){
        const result = a + b;
        return result;
      }
    } 


    const Calcu = new Calculator();
    
    console.log(Calcu.Sum(10,5));