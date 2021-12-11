import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ObrigadoComponent } from './components/obrigado/obrigado.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'obrigado', component: ObrigadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
