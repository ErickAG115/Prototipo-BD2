import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { usuario } from 'src/interfaces/usuarios.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataServiceService, private router: Router,
    private route: ActivatedRoute) { }

id : any;
nombre: any;
identificacion: any;

admin: any;
itsAdmin: boolean = false;

listUser: usuario[] = [];
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
   // this.get_user();
  }


  get_user() {
    this.dataService.get_user(this.id).subscribe(user => {
      // console.log(user);
      this.listUser = user;
      this.nombre = this.listUser[0].nombre;
      this.identificacion = this.id;

      if (this.listUser[0].admin == 1) {
        this.itsAdmin = true;
      } 
    })
  }

  goToAccounts() {
    this.router.navigate(['/accounts', this.id, this.admin]);
  }

}
