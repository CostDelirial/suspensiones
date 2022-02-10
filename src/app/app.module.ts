import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { SuspenisonModalComponent } from './modulos/registroSusp/suspenison-modal.component';
import { DuctoModalComponent } from './modulos/registro-ducto/registro-ducto.component';
import { PersonalModalComponent } from './modulos/registro-personal/registro-personal.component';
import { MotivoModalComponent } from './modulos/registro-motivo/registro-motivo.component';
import { TipoMotivoModalComponent } from './modulos/registro-tipo-motivo/registro-tipo-motivo.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SuspenisonModalComponent,
    DuctoModalComponent,
    PersonalModalComponent,
    MotivoModalComponent,
    TipoMotivoModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
