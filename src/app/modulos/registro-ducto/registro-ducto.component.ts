import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DuctoService } from 'src/app/service/ducto/ducto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-ducto',
  templateUrl: './registro-ducto.component.html',
  styles: [
  ]
})
export class DuctoModalComponent implements OnInit {
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  public formSubmitted = false;

  public modificaDuctoForm = this.fb.group({
nombre: ['', Validators.required],
id:['',Validators.required]
  })

public ducto: any [] = [];
id: number = 0;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _ductoService: DuctoService) {
      this.setearId();
      this.mostrarDucto();
     }

  ngOnInit(): void {

  }

  mostrarDucto(){
    this._ductoService.cargarDuctoPoId(this._ductoService.id).subscribe( ( resp: any) => {
      
      this.modificaDuctoForm.get('nombre')?.setValue(resp.data.nombre);
      this.modificaDuctoForm.get('id')?.setValue(this.id);
    })
  }

  modificarDucto(){
    
    this._ductoService.modificaDucto(this.id, this.modificaDuctoForm.value)
    .subscribe((resp: any) => {
      this.closeModal('cerrar');
      this.modificaDuctoForm.reset();
      Swal.fire('OK','modificacion correcta', 'success');
      
    })
  }


  closeModal($event: any ){
    this.router.navigate([{ outlets: {modal: null}}]);
    this.modalClose.next($event);
  }
setearId(){
  this.id = this._ductoService.id;
}

}
