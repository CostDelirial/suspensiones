import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { DuctoService } from 'src/app/service/ducto/ducto.service';
import { LogisticaService } from 'src/app/service/logistica/logistica.service';
import { ModalesService } from 'src/app/service/modales/modales.service';
import { MotivosService } from 'src/app/service/motivo/motivos.service';
import { PersonalCCService } from 'src/app/service/personalCC/personal-cc.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styles: [], 
})
export class CatalogosComponent implements OnInit {

  public ducto: any []=[];
  public motivo: any[]=[];
  public logistica: any[]=[];
  public personalcc: any[] = [];
  constructor( private _ductoService: DuctoService,
    private _motivoService:MotivosService,
    private _logisticaService: LogisticaService,
    private _personalCCService: PersonalCCService,
    private _eventModal: ModalesService) { 
  this.cargarCatalogos();
  }
  ngOnInit(): void {
  }
  

  verModales(nombre:string){
    console.log(nombre)
    this._eventModal.abrirModal(nombre);
  }
//------------------------------------------------------------------------------
//                          carga de los catalogos 
//------------------------------------------------------------------------------
  cargarCatalogos(){
    this._ductoService.cargarDuctos().subscribe((resp:any) => {
      this.ducto = resp.data;
    });
    this._motivoService.cargarMotivo().subscribe((resp:any)=>{
      this.motivo = resp.data;
    });
    this._logisticaService.cargarLogistica().subscribe((resp:any) => {
      this.logistica = resp.data;
    });
    this._personalCCService.cargarPersonal().subscribe((resp: any) => {
      this.personalcc =resp.data;
    });
  }

//---------------------------------------------------------------------------
//              cambiar estatus de un ducto                       DUCTO
//---------------------------------------------------------------------------
cambiarEstatus(id:string){

  Swal.fire({
    title: 'Estas seguro de cambiar el estatus del ducto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, cambiar!'
  }).then((result:any) => {
    if (result.isConfirmed) {
      Swal.fire(
        'cambiado!',
        'el ducto fue modificado',
        'success'
      )
      this._ductoService.cambiarEstatus(id).subscribe((resp:any) => {
        this.cargarCatalogos();
      });
    }
  })
}
modificarDucto(id: number){
  console.log(id);
  this._ductoService.setearId(id);
  console.log(id);
  this._eventModal.abrirModal('registroDucto');
}



//---------------------------------------------------------------------------
//                                                          MOTIVO SUSPENSION
//---------------------------------------------------------------------------
agregarMotivoSusp(){
  /*this._ductoService.setearId(id);
  console.log(id);*/
  this._eventModal.abrirModal('registroMotivo');
}
//---------------------------------------------------------------------------
//                                                          TIPO SUSPENSIÓN 
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//                                                          PERSONLAS CC
//---------------------------------------------------------------------------
agregarPersonalCC(){
  /*this._ductoService.setearId(id);
  console.log(id);*/
  this._eventModal.abrirModal('registroPersonal');
}


}
