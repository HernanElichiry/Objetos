interface IElectronic {
    getBrand(): string;
    getModel(): string;
    getYear(): number;
  }
  
  class Electronic implements IElectronic {
    private brand: string;
    private model: string;
    private year: number;
    
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    getBrand(): string {
      return this.brand;
    }
    getModel(): string {
      return this.model;
    }
    getYear(): number {
      return this.year;
    }
  }
  
interface Telephones{

}

  class Phone extends Electronic {
     private color: string;
    public constructor(
      brand: string,
      model: string,
      year: number,
      color: string
    ) {
      super(brand, model, year);
      this.color = color;
    }
    makeCall(number: string): void {
      console.log(`Calling to ${number}...`);
    }
    getColor(): string {
      return this.color;
    }
  }
  
  class Television extends Electronic {
    private channel: number;
    public constructor(brand: string, model: string, year: number) {
      super(brand, model, year);
      this.channel = 0;
    }
    changeChannel(channel: number): void {
      this.channel = channel;
    }
    getChannel(): number {
      return this.channel;
    }
  }