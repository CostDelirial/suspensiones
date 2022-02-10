import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { ISuspension } from 'src/app/interface/suspension';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;
@Injectable({

  providedIn: 'root'
})
export class SuspensionesService {

  id: number = 0;
  constructor( private http: HttpClient) { }

  
//----------------------------------------------------------------------------------
//                      METODOS GET
//----------------------------------------------------------------------------------
cargarSuspensiones(){
  return this.http.get(`${base_url}/suspension`)
}

suspensionParticular(ductoId: number,fechaInicio: Date, fechaFinal: Date){
  const url = `${base_url}/suspension/suspensionParticular/${fechaInicio}/${fechaFinal}/${ductoId}`;
  return this.http.get(url);
}

cargarTablero(){
  return this.http.get(`${base_url}/suspension/tablero`);
}
//------------------------------------------------------------------------------------
//                  METODO POST
//------------------------------------------------------------------------------------
nuevoRegistro(formData:ISuspension){
  const url = base_url+"/suspension";
  return this.http.post(url, formData);
}

//------------------------------------------------------------------------------------
//          pase y seteo de ID
//------------------------------------------------------------------------------------
setearId( id: number){
  this.id = id;
}

//------------------------------------------------------------------------------------
//         consultas ZITE v2.1
//------------------------------------------------------------------------------------
zieteGeneral(fechaInico: Date, fechaFinal: Date){
  const url = base_url + "/suspension/zieteGeneral/"+fechaInico+"/"+fechaFinal;
  return this.http.get(url); 
}

zieteParticular(ductoId: number,fechaInicio: Date, fechaFinal: Date){
  const url = base_url + "/suspension/zieteParticular/"+fechaInicio+"/"+fechaFinal+"/"+ductoId;
  return this.http.get(url);
}




}
