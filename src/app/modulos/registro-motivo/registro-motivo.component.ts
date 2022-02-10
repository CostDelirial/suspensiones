import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogisticaService } from 'src/app/service/logistica/logistica.service';
import { MotivosService } from 'src/app/service/motivo/motivos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro-motivo',
  templateUrl: './registro-motivo.component.html',
  styles: [
  ]
})
export class MotivoModalComponent implements OnInit {
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  id: number = 0;
  public logistica: any []=[];
  public formSubmitted = false;
  public motivoForm = this.fb.group({
    nombre: ['',Validators.required],
    logisticaid: [0,Validators.required]
  })

  constructor(private router: Router,
    private _motivoService: MotivosService,
    private fb: FormBuilder,
    private _logisticaService: LogisticaService) { 

      this.cargarLogistica();
    }

  ngOnInit(): void {
  }

  cargarLogistica (){
    this._logisticaService.cargarLogistica().subscribe((resp:any) => {
this.logistica = resp.data;
    })
  }
  nuevoMotivo(){
   
   this._motivoService.nuevoMotivo(this.motivoForm.value).subscribe(() => {
    Swal.fire('OK','Se agrego el motivo', 'success');
   }) 
  }
  closeModal($event: any ){
    this.router.navigate([{ outlets: {modal: null}}]);
    this.modalClose.next($event);
  }
}
