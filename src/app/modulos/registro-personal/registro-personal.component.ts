import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalCCService } from 'src/app/service/personalCC/personal-cc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-personal',
  templateUrl: './registro-personal.component.html',
  styles: [
  ]
})
export class PersonalModalComponent implements OnInit {
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  public formSubmitted = false;
  
public personalCCForm = this.fb.group({
  nombre:['',Validators.required]
})

  constructor(private router: Router,
    private fb: FormBuilder,
    private _personalCCSErvice: PersonalCCService) { }

  ngOnInit(): void {
  }
  closeModal($event: any ){
    this.router.navigate([{ outlets: {modal: null}}]);
    this.modalClose.next($event);
  }

  nuevoPersonalCC(){

  this._personalCCSErvice.registrarPersonal(this.personalCCForm.value).subscribe( () =>{
    Swal.fire('OK','Se agrego el motivo', 'success');
  },(error: Error)=>{
    console.log(error);
  });
      console.log(this.personalCCForm.value);
  }
}
