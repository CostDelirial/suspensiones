import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DuctoService } from 'src/app/service/ducto/ducto.service';

@Component({
  selector: 'app-suspenison-modal',
  templateUrl: './suspenison-modal.component.html',
  styles: [
  ]
})
export class SuspenisonModalComponent implements OnInit {
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();
  constructor( private router: Router, private _ductoService: DuctoService) { 
  
  }
  idPOrueba: number = 0;
id: number = 0;
  ngOnInit(): void {
this.id = this._ductoService.id;
console.log(this.id);
  }


  closeModal($event: any ){
    this.router.navigate([{ outlets: {modal: null}}]);
    this.modalClose.next($event);
  }
}
