/*Manejo de errores:
Consigna, agregar los siguientes dos manejos de errores (con try y catch) 
dentro del mismo ejercicio de gestion de biblioteca. Los mismos son:
cuando un usario este penalizado no podra retirar un  item hasta FECHA DE DESPENALIZACION
cuando un usuario quiere retirar un item que no esta disponile, deberia avisar por mensaje, 
que ese  TITULO no esta dispoible, y que estara disponible a partir de la FECHA DE DEVOLUCION.*/

import { randomUUID as uid } from "node:crypto";
const Uid = uid();
console.log(Uid);