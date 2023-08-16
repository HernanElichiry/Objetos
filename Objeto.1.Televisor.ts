/*Trabajo obligatorio con entrega a tutores designados (miércoles 9 fecha límite)
implementar todos los métodos de la clase Televisor (es decir, que las funciones... funcionen cuac!)
agregar validaciones:
1- si no está encendido no puede realizar ninguna acción, salvo encender
2- volumen min 0 / max 100
3- canal min 1 / max 99
4- función info muestra canal, volumen y la hora actual*/


class Televisor {
    isOn: boolean;
    volume: number;
    channel: number;
    
    constructor(on: boolean = false, vol: number = 0, chn: number = 0) {
      this.isOn = on;
      this.volume = vol;
      this.channel = chn;
    }
    switchOnOff(): void {
      this.isOn = !this.isOn;
      console.log(this.isOn ? "encendido" : "apagado");
    }
    
    volUp(subirVolumen: number = 1): void {
      if (!this.isOn) return console.log("el televisor esta apagado");
      this.volume = this.volume + subirVolumen;
     
      if (this.volume > 100 ){
        this.volume = 100; 
        return console.log("volumen maximo alcanzado", this.volume);
      } else{
        console.log("subiste el volumen a", this.volume);
      }
      
    }
    volDown(bajarVolumen: number = 1): void {
      if (!this.isOn) return console.log("el televisor esta apagado");
      this.volume = this.volume - bajarVolumen;

      if (this.volume < 0 ){
        this.volume = 0; 
        return console.log("volumen minimo alcanzado", this.volume);
      } else{
        console.log("bajaste el volumen a", this.volume);
      }
      
    }

    channelUp(): void {
      if (!this.isOn) return console.log("el televisor esta apagado");
      this.channel ++;

      if (this.channel > 99){
          this.channel = 1;  
      }
      
      console.log("channel up", this.channel);
    }
   
    channelDown(): void {
      if (!this.isOn) return console.log("el televisor esta apagado");
      this.channel --;
      
      if (this.channel < 1){
        this.channel = 99;  
    }

      console.log("channel down", this.channel);
      
    }

    pickChannel(channel: number): void {
      if (!this.isOn) return;
      if (channel > 99) return;
      this.channel = channel;
      console.log("Cambiaste al canal", this.channel);
    }

    info(): void {
      if (!this.isOn) return console.log("el televisor esta apagado");
      const horaActual = new Date().toLocaleTimeString();
      console.log( "informacion: canal:",this.channel,"volumen:", this.volume, "hora actual:", horaActual );
    }
  }
  
  const tv01 = new Televisor();
  tv01.switchOnOff();
  tv01.switchOnOff(); 
  tv01.switchOnOff();
  tv01.pickChannel(45);
  tv01.volUp(10);
  tv01.volUp(90);
  tv01.volUp();
  tv01.volDown(17);
  tv01.volUp();
  tv01.volDown(200);
  tv01.channelUp();
  tv01.channelUp();
  tv01.channelDown();
  tv01.channelDown();
  tv01.info();
  tv01.pickChannel(100);
  tv01.pickChannel(99);
  tv01.channelUp();
 

