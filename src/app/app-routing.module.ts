import { NgModule } from '@angular/core';
import { RouterModule, Routes } from  '@angular/router';
import { AuthRoutingModule } from './auth/app-routing.module';
import { DuctoModalComponent } from './modulos/registro-ducto/registro-ducto.component';
import { MotivoModalComponent } from './modulos/registro-motivo/registro-motivo.component';
import { PersonalModalComponent } from './modulos/registro-personal/registro-personal.component';
import { TipoMotivoModalComponent } from './modulos/registro-tipo-motivo/registro-tipo-motivo.component';
import { SuspenisonModalComponent } from './modulos/registroSusp/suspenison-modal.component';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },

//modales
{ path: 'registroSusp', component: SuspenisonModalComponent, outlet: 'modal'},
{ path: 'registroDucto', component: DuctoModalComponent, outlet: 'modal'},
{ path: 'registroMotivo', component: MotivoModalComponent, outlet: 'modal'},
{ path: 'registroPersonal', component: PersonalModalComponent, outlet: 'modal'},
{ path: 'registroTipoMotivo', component: TipoMotivoModalComponent, outlet: 'modal'}

]

@NgModule({
    imports:[
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}