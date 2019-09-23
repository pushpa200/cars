import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarsdetailsComponent } from './carsdetails/carsdetails.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsdetailsComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
