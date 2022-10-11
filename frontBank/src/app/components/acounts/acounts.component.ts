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


  listCuentas: cuenta[] = [];
  userId: any;
  admin: any;
  itsAdmin: boolean = false;

  ngOnInit(): void {

    this.userId = this.route.snapshot.paramMap.get('id');
    this.admin = this.route.snapshot.paramMap.get('admin');
    this.listCuentas = [];
    this.LoadAccounts(this.userId);

  }

  async LoadAccounts(ident: string) {
    if (this.admin == 0) {
      this.dataService.get_cuentas_cliente(this.userId).
        subscribe(cuentas => {
          this.listCuentas = cuentas;
          console.log("Accouts: ", this.listCuentas);
        })
    }
    else {
      this.itsAdmin = true;
      this.dataService.get_cuentas().
        subscribe(cuentas => {
          this.listCuentas = cuentas;
          console.log("Accouts: ", this.listCuentas);
        })

    }
  }

  goToHome(){
    this.router.navigate(['/home', this.userId]);
  }

}
