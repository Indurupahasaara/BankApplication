import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankinterfaceComponent } from './components/bankinterface/bankinterface.component';


@NgModule({
  declarations: [
    AppComponent,
    BankinterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
