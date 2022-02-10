import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DuctoService } from 'src/app/service/ducto/ducto.service';
import { MotivosService } from 'src/app/service/motivo/motivos.service';
import { PersonalCCService } from 'src/app/service/personalCC/personal-cc.service';
import { SuspensionesService } from 'src/app/service/suspensiones/suspensiones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  public formSubmitted = false;

  public registroForm = this.fb.group({
    ductoId: ['', [Validators.required]],
    estatus: ['', [Validators.required]],
    fechaHora: ['', Validators.required],
    observaciones: ['', Validators.required],
    km: [0, Validators.required],
    bph: [0, Validators.required],
    bls: [0, Validators.required],
    motivoSuspensionId: ['', Validators.required],
    personalCCId: ['', Validators.required]
  });


  public ducto: any[] = [];
  public motivo: boolean = false;
  public motivos: any[] = [];

  public personal: any[] = [];

  constructor(private _ductoService: DuctoService,
    private fb: FormBuilder,
    private _motivoService: MotivosService,
    private _personalService: PersonalCCService,
    private _suspensionService: SuspensionesService) {
    this.cargarCatalogos();
  }

  ngOnInit(): void {
  }


  cargarCatalogos() {
    this._ductoService.cargarDuctosActivos().subscribe((resp: any) => {
      this.ducto = resp.data;
    });
    this._motivoService.cargarMotivo().subscribe((resp: any) => {
      this.motivos = resp.data;
    });

    this._personalService.cargarPersonal().subscribe((resp: any) => {
      this.personal = resp.data;
    });
  }


  registro() {
    const fechaHoras: string = this.registroForm.value.fechaHora;
    let ductoSelec: any;
    let motivoS: any;
    for (let i = 0; i < this.ducto.length; i++) {
      if (this.ducto[i].id === this.registroForm.value.ductoId) {
        ductoSelec = this.ducto[i].nombre;
      }
    }
    

    if (this.registroForm.get('estatus')?.value === 'REANUDACION') {
     
      this.registroForm.get('observaciones')?.setValue('null');
      this.registroForm.get('km')?.setValue(0);
      this.registroForm.get('bph')?.setValue(0);
      this.registroForm.get('bls')?.setValue(0);
      this.registroForm.get('motivoSuspensionId')?.setValue(28);
      this.registroForm.get('personalCCId')?.setValue(33);
      this._suspensionService.nuevoRegistro(this.registroForm.value)
        .subscribe((resp: any) => {

          this.limpiarForm();
          Swal.fire({
            icon: "success",
            title: 'Registrado',
            text: `${fechaHoras} INICIA EMPAQUE EL SISTEMA ${ductoSelec}`,
          })

        }, (erro: Error) => {
          console.log(erro);
        })
    } else {
      for (let x = 0; x < this.motivos.length; x++) {
        if (this.motivos[x].id === this.registroForm.value.motivoSuspensionId) {
          motivoS = this.motivos[x].nombre;
        }
      }
      this._suspensionService.nuevoRegistro(this.registroForm.value).subscribe((resp: any) => {
        
        Swal.fire({
          icon: "success",
          title: 'Registrado',
          text: `${fechaHoras} SUSPENDE OPERACIÓN EL SISTEMA ${ductoSelec} POR ${motivoS} `,
        });
        this.limpiarForm();

      }, (erro: Error) => {
        console.log(erro);
      })
    }

  }

  limpiarForm() {
    this.registroForm.reset();
    this.registroForm.get('km')?.setValue(0);
    this.registroForm.get('bph')?.setValue(0);
    this.registroForm.get('bls')?.setValue(0);

  }


}
