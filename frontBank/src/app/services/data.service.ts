import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { usuario } from 'src/interfaces/usuarios.interface';
import { cuenta } from 'src/interfaces/cuentas.interface';

@Injectable({
    providedIn: 'root'
  })


export class DataServiceService { 

    constructor(private http: HttpClient) { }
 
    url = "http://localhost:"

loggin(name:String,password:String){
        let data = {
            name,password
        }
        return this.http.get<usuario>(this.url + data);
  }


  get_user(identificacion: string) {

    return this.http.get<usuario[]>(this.url + '/users/' + identificacion);

  }

  get_cuentas() {
    return this.http.get<cuenta[]>(this.url + '/cuentas');
  }

  get_cuentas_cliente(identificacion: string) {
    return this.http.get<cuenta[]>(this.url + '/cuentas/' + identificacion);
  }


}