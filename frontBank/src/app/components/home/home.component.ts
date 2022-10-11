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

user : any;

listUser: usuario[] = [];
  ngOnInit() {

    this.user = {
      nombre: this.route.snapshot.paramMap.get('nombre'),
      cedula: this.route.snapshot.paramMap.get('id'),
      admin: this.route.snapshot.paramMap.get('admin')
    }
   // this.get_user();
  }




  goToAccounts() {
    this.router.navigate(['/accounts', this.user.cedula, this.user.nombre, this.user.admin]);
  }

}
