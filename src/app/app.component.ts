import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalesService } from './service/modales/modales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'front-suspension';

  constructor(
    private _eventModal:ModalesService,
    private router: Router
  ){}

  ngOnInit(): void {
      this._eventModal.eventModal.subscribe( (data: any) => {
        this.router.navigate([{ outlets: { modal:data}}]);
      })
  }

}
