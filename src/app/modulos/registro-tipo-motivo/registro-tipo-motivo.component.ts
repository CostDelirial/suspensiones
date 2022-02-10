import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-tipo-motivo',
  templateUrl: './registro-tipo-motivo.component.html',
  styles: [
  ]
})
export class TipoMotivoModalComponent implements OnInit {
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router,
    ) { }

  ngOnInit(): void {
  }

  closeModal($event: any ){
    this.router.navigate([{ outlets: {modal: null}}]);
    this.modalClose.next($event);
  }
}
