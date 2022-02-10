import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { SuspensionesComponent } from './suspensiones/suspensiones.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnalisisComponent } from './analisis/analisis.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    DashboardComponent,
    CatalogosComponent,
    SuspensionesComponent,
    PagesComponent,
    AnalisisComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule
  ],
  exports:[
    DashboardComponent,
    SuspensionesComponent,
    CatalogosComponent,
    PagesComponent
  ]
})
export class PagesModule { }
