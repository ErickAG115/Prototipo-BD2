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

  async login(name:any, password:any) {
    console.log(name.value, password.value)
    this.dataService.loggin(
      name.value, 
      password)
      .subscribe(
        res => {
          this.user = res;
          console.log(this.user);
        },
        
      )

      if (this.user!= null) {
      
        this.id = this.user.cedula;
        

        this.router.navigate(['/home', this.id]);
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No estás registrado!',
        })
      }
      return false
    }
}

