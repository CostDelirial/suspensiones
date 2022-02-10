import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IDucto } from 'src/app/interface/IDucto';

const base_url = environment.base_url; 

@Injectable({
  providedIn: 'root'
})
export class DuctoService {

  id: number = 0;
  
  constructor( private  http: HttpClient) { }


  cargarDuctos(){
    return this.http.get(`${base_url}/ducto`);
  }

  cargarDuctoPoId(id: number){
    return this.http.get(`${base_url}/ducto/${id}`);
  }
  cargarDuctosActivos(){
    return this.http.get(`${base_url}/ducto/activos`);
  }

  cambiarEstatus(id: string){
    const url = base_url+'/ducto/Estatus/'+id;
    console.log(url);
    return this.http.put(url,'');
  }

modificaDucto(id: number,formData:IDucto){
  const url = base_url+'/ducto/'+id;
  return this.http.put(url,formData);
}
  setearId( id: number){
    this.id = id;
  }
}