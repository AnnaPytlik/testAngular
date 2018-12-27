import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TrocheOMnieComponent } from './troche-o-mnie/troche-o-mnie.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,HomeComponent, PortfolioComponent, TrocheOMnieComponent, MainComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
