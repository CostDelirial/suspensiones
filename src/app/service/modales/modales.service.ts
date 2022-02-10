import { Injectable, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ModalesService {

  @Output()
  eventModal = new EventEmitter<any>();
  constructor() { }

  abrirModal( nombre: string,id?: string){
    console.log(nombre)
    this.eventModal.emit(nombre);
  }
}
