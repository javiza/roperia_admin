import { Injectable } from '@angular/core';

export interface Prendas {
  nombre: string
  cantidad: number
  descripcion: string
}

@Injectable({
  providedIn: 'root'
})
export class PrendaService {
  private prendas:Prendas[] = []
  constructor() { 
    this.prendas.push( {nombre: "campo verde grande", cantidad: 19, descripcion: "150cmx100cm"})
    this.prendas.push( {nombre: "MCM", cantidad: 11, descripcion: "190x150"})
    this.prendas.push( {nombre: "ranger", cantidad: 7, descripcion: "100cmx10cm"})
  } 
  add(prenda:Prendas){
    this.prendas.push(prenda)
  }
  getAll():Prendas[]{
    return this.prendas
  }
  findIndex(prenda:Prendas){
    return this.prendas.findIndex(p => p.nombre == prenda.nombre)
  }
  delete(prenda:Prendas){
    const indice = this.findIndex(prenda)
    this.prendas.splice(indice,1)
  }
}
