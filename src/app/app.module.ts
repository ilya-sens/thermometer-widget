import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThermometerComponent } from './thermometer/thermometer.component';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ThermometerComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
