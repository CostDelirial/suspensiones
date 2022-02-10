import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonalCCService {

  constructor( private http: HttpClient) { }

cargarPersonal(){
  return this.http.get(`${base_url}/personalCC`)
}

registrarPersonal( formData: any){
 const url = `${base_url}/personalCC`;
 return this.http.post(url, formData);
}

}
