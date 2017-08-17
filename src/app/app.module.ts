import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataService } from 'app/service/data.service';
import {LogService } from 'app/service/log.service';
import {  AppComponent} from './app.component';

@NgModule({
  declarations: [
AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
