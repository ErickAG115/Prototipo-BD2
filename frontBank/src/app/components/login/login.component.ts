import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {DataServiceService} from 'src/app/services/data.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private dataService: DataServiceService, private router: Router) { }


  ngOnInit(){

  }

  user:any;
  id:any;

  login(name:any, password:any) : boolean{
    console.log(name.value, password.value)
    this.dataService.loggin(
      name.value,
      password.value)
      .subscribe(
         res => {
            console.log(res)
            let response:any = res;
            this.user = {
              nombre: response.first_name,
              cedula: response.id_val,
              admin: response.admin
            };
            console.log(this.user);
           if (this.user!= null) {
             this.id = this.user.cedula;

             this.router.navigate(['/home', this.user.cedula, this.user.nombre,  this.user.admin]);
           } else {
             Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'No estás registrado!',
               timer:3000
             })
           }
          },
        )

      return false;
    }
}

