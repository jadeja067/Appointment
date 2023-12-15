import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { ContainerComponent } from './components/container/container.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
