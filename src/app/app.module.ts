import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // we add this because we will use ngModel in input tag for binding
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message.component';
import { NestedMessageComponent } from './nested-message.component';
import { HelloComponent } from './hello/hello.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { TemperatureComponent } from './temperature.component';
import { WeatherComponent } from './weather/weather.component';

// we add messageComponent here to register our new component so that angular would know it existence
// imports: will help to add some other modules in this module
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NestedMessageComponent,
    HelloComponent,
    CockpitComponent,
    ServerElementComponent,
    TemperatureComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
