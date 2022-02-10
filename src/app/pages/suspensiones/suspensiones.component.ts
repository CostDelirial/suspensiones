import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DuctoService } from 'src/app/service/ducto/ducto.service';
import { ModalesService } from 'src/app/service/modales/modales.service';
import { SuspensionesService } from 'src/app/service/suspensiones/suspensiones.service';


@Component({
  selector: 'app-suspensiones',
  templateUrl: './suspensiones.component.html',
  styles: [
  ]
})
export class SuspensionesComponent implements OnInit {
  

  public suspensionPartForm = this.fb.group({
    ductoId: ['', Validators.required],
    fechaInicio: ['', Validators.required],
    fechaFinal: ['', Validators.required]
  });

  public suspensiones: any [] =[];
  public ducto: any[] = [];
  public suspensionParticular: any [] = [];

  constructor(private _suspensionesService: SuspensionesService,
    private _eventModal: ModalesService,
    private _ductoService:DuctoService,
    private fb: FormBuilder) { 
    this.cargarSuspensiones();
    this.cargarDuctos();
  }

  ngOnInit(): void {
    
  }

  cargarSuspensiones(){
    this._suspensionesService.cargarSuspensiones().subscribe((resp:any) => {
      this.suspensiones = resp.data;
     
    })
  }

  modificarSuspension(id: number){
    this._suspensionesService.setearId(id);
    console.log(id);
    this._eventModal.abrirModal('registroSusp');
  }

  cargarDuctos() {
    this._ductoService.cargarDuctosActivos().subscribe((resp: any) => {
      this.ducto = resp.data;
    })
  }

  cargarSuspensionParticular(){
    let ductoId = this.suspensionPartForm.get('ductoId')?.value;
    let fechaInicio = this.suspensionPartForm.get('fechaInicio')?.value;
    let fechaFinal = this.suspensionPartForm.get('fechaFinal')?.value;
    this._suspensionesService.suspensionParticular(ductoId,fechaInicio,fechaFinal).subscribe((resp: any ) => {
this.suspensionParticular = resp.data;

    })
  }
}
