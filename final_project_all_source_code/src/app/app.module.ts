
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DemandManagerComponent } from './demand-manager/demand-manager.component';
import { HeaderComponent } from './header/header.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HighchartsChartComponent } from 'highcharts-angular';
import { SmartDeployServiceService } from './smart-deploy-service.service';
import { AgGridModule } from 'ag-grid-angular/';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

import {AutoCompleteModule} from 'primeng/autocomplete';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogService} from 'primeng/api';
import { SuperComponent } from './super/super.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,LogoutComponent,
    DemandManagerComponent,HeaderComponent,
    HighchartsChartComponent,
    SuperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    AgGridModule.withComponents([]),
    DynamicDialogModule,
    MDBBootstrapModule.forRoot(),
    
   
    
ButtonModule,
CalendarModule,FormsModule,BrowserAnimationsModule,
    AutoCompleteModule,HttpClientModule,CarouselModule
    

  ],
  entryComponents: [
   HeaderComponent
],
  providers: [SmartDeployServiceService,DialogService,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
