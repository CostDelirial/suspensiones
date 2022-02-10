import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MotivosService {

  id: number = 0;
  
  constructor(private http: HttpClient) { }


  cargarMotivo(){
    return this.http.get(`${base_url}/motivoSuspension/logistica`);
  }

  nuevoMotivo(formData: any){
const url = base_url+"/motivoSuspension";
return this.http.post(url,formData);
  }

  setearId( id: number){
    this.id = id;
  }
}
