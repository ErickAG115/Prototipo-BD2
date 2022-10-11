import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AcountsComponent } from './components/acounts/acounts.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'home/:id',
    component: HomeComponent
  },
  {
    path: 'accounts/:id/:admin',
    component: AcountsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
