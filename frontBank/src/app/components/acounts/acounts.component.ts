import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { cuenta } from 'src/interfaces/cuentas.interface';
@Component({
  selector: 'app-acounts',
  templateUrl: './acounts.component.html',
  styleUrls: ['./acounts.component.scss']
})
export class AcountsComponent implements OnInit {

  constructor(private dataService: DataServiceService, private router: Router,
    private route: ActivatedRoute) { }


  listCuentas: any[] = [];
  nombre: any;
  userId: any;
  admin: any;
  
  ngOnInit() {
    this.nombre = this.route.snapshot.paramMap.get('nombre');
    this.userId = this.route.snapshot.paramMap.get('id');
    this.admin = this.route.snapshot.paramMap.get('admin');
    this.listCuentas = [];
    console.log("admin", this.admin)
    this.LoadAccounts(this.userId);

  }

  LoadAccounts(ident: string) {
    console.log("loadaccounts", this.admin)

    if (this.admin == "false") {
      this.dataService.get_cuentas_cliente(this.userId).
        subscribe(cuentas => {
          this.listCuentas = cuentas;
          console.log("Accounts: ", this.listCuentas);
        })
    }
    else {
      this.dataService.get_cuentas().
        subscribe(cuentas => {
          this.listCuentas = cuentas;
          console.log("Accouts: ", this.listCuentas);
        })

    }
  }

  goToHome(){
    this.router.navigate(['/home', this.userId, this.nombre, this.admin]);
  }

}
