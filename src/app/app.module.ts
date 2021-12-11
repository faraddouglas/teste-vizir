import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculoHomeComponent } from './components/calculo-home/calculo-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PrecosPlanoComponent } from './components/precos-plano/precos-plano.component';
import { Vantagens01Component } from './components/vantagens01/vantagens01.component';
import { Vantagens02Component } from './components/vantagens02/vantagens02.component';
import { Vantagens03Component } from './components/vantagens03/vantagens03.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NgxMaskModule } from 'ngx-mask';
import { ObrigadoComponent } from './components/obrigado/obrigado.component';
import { HeaderCheckoutComponent } from './components/header-checkout/header-checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculoHomeComponent,
    FooterComponent,
    HomeComponent,
    PrecosPlanoComponent,
    Vantagens01Component,
    Vantagens02Component,
    Vantagens03Component,
    CheckoutComponent,
    ObrigadoComponent,
    HeaderCheckoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
