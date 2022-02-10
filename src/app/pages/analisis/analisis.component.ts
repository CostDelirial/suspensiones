import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DuctoService } from 'src/app/service/ducto/ducto.service';
import { SuspensionesService } from 'src/app/service/suspensiones/suspensiones.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective} from 'ng2-charts';
//import DataLabelsPlugin from 'chartjs-plugin-datalabels';


import Swal from 'sweetalert2';
import { now } from 'jquery';
import { ISuspension } from 'src/app/interface/suspension';
@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styles: [
  ]
})
export class AnalisisComponent implements OnInit {
  @ViewChild(AnalisisComponent) chart: BaseChartDirective | undefined;

  public formSubmitted = false;

  public zietePartForm = this.fb.group({
    ductoId: ['', Validators.required],
    fechaInicio: ['2022-01-01', Validators.required],
    fechaFinal: ['2022-01-31', Validators.required]
  });

  public zieteGeneralForm = this.fb.group({
    fechaInicioG: ['', Validators.required],
    fechaFinalG: ['', Validators.required]
  })

  public ducto: any[] = [];
  public razon: any[] = [];
  public tog: any[] = [];
  public data: ISuspension[] =[];
 


  constructor(
    private fb: FormBuilder,
    private _suspensionService: SuspensionesService,
    private _ductoService: DuctoService,
  ) {
    this.cargarDuctos();
    
    this.cargaInicialGrafica();
  }

  //-------------------------------------------------------
  //        GRAFICA BARRAS
  //-------------------------------------------------------
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      /*datalabels: {
        anchor: 'end',
        align: 'end'
      }*/
    }
  };
  public barChartType: ChartType = 'bar';
  /*public barChartPlugins = [
    DataLabelsPlugin
  ];*/

  

  public chartColors: any[] =[
    { // first color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }
    
    //{backgroundColor:["#9F2241","#235B4E","#DDC9A3","#98989A"]}
  ]
  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    
  }

  public barChartData: ChartData<'bar'> = {
  
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [23, 59, 80, 81, 56, 55, 40 ], label: 'Logistico' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'No logistico' }
    ]
  };

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }


  ngOnInit(): void {
    
  }
  
 cargaInicialGrafica(){
  let fechaInicio = this.zietePartForm.get('fechaInicio')?.value;
  let fechaFinal = this.zietePartForm.get('fechaFinal')?.value;
  this._suspensionService.zieteParticular(72,fechaInicio,fechaFinal).subscribe((resp: any) => {

    this.data = resp.data;
    
  })
 }
  


  cargarDuctos() {
    this._ductoService.cargarDuctosActivos().subscribe((resp: any) => {
      this.ducto = resp.data;
    })
  }

  zieteGeneral() {
    let fechaInicio = this.zieteGeneralForm.get('fechaInicioG')?.value;
    let fechaFinal = this.zieteGeneralForm.get('fechaFinalG')?.value;
    this._suspensionService.zieteGeneral(fechaInicio, fechaFinal).subscribe((resp: any) => {

      this.tog = resp.data;
      
    })
  }

  zieteParticular() {
    let ductoId = this.zietePartForm.get('ductoId')?.value;
    let fechaInicio = this.zietePartForm.get('fechaInicio')?.value;
    let fechaFinal = this.zietePartForm.get('fechaFinal')?.value;
console.log(fechaInicio);
    this._suspensionService.zieteParticular(ductoId, fechaInicio, fechaFinal).subscribe((resp: any) => {
      if (resp.data.length === 0) {
        Swal.fire('', 'no se encontraron datos en el periodo seleccionado', 'warning');
      }
      this.razon = resp.data;
console.log(this.razon);
    })

  }
}