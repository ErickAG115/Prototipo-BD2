import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { usuario } from 'src/interfaces/usuarios.interface';
import { cuenta } from 'src/interfaces/cuentas.interface';

@Injectable({
    providedIn: 'root'
  })


export class DataServiceService {

    constructor(private http: HttpClient) { }

    url = "http://localhost:3000"

loggin(name:String,password:String){
        let data = {
            name,password
        }
        return this.http.get<any>(this.url + '/cassandra/return_by_name/'+ name+'/'+password);
  }


  get_user(identificacion: string) {

    return this.http.get<usuario[]>(this.url + '/cassandra/return/' + identificacion);

  }

  get_cuentas() {
    return this.http.get<cuenta[]>(this.url + '/cassandra/return_cuentas');
  }

  get_cuentas_cliente(identificacion: string) {
    return this.http.get<cuenta[]>(this.url + '/cassandra/return_by_id/' + identificacion);
  }


}
