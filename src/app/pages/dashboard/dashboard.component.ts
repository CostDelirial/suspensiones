import { Component, OnInit } from '@angular/core';
import { SuspensionesService } from 'src/app/service/suspensiones/suspensiones.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit{
 public tablero: any [] = [];
 public  hora = new  Date; 
 constructor( private _suspensionesSevicer: SuspensionesService) {
    this.cargarTablero();
   }

   ngOnInit(): void {
         this.hora = new Date();
         setInterval(()=>{
           this.hora = new Date();
         }, 1000);
   }

cargarTablero(){
  this._suspensionesSevicer.cargarTablero().subscribe( (resp:any) =>{
    this.tablero = resp.data;
  })
}



}
