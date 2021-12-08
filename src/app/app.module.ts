import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrecosPlanoComponent } from './precos-plano/precos-plano.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { CalculoHomeComponent } from './calculo-home/calculo-home.component';
import { Vantagens01Component } from './vantagens01/vantagens01.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrecosPlanoComponent,
    FooterComponent,
    CalculoHomeComponent,
    Vantagens01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
