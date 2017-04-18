import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { PanelModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
// Import angular2-fusioncharts
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';
// Import FusionCharts Charts module
//import { Charts } from 'fusioncharts/fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { ButtonModule }  from 'primeng/primeng';
import { RoutingModule } from './app.route.module';
import { topComponent } from './top/top.component';
import { sideNavComponent } from './sideNav/sideNav.component';
import { MenuModule, TabViewModule, DataTableModule, SharedModule, MultiSelectModule } from 'primeng/primeng';
import { TaskComponent } from './task/task.component';
import { DirectorComponent } from './director/director.component';
import { DirectorListComponent, DirectorListNestedComponent } from './director/directorlist.component';
import { ChartComponent } from './chart/chart.component';

let CUSTOM_COMPONENT = [ AppComponent, topComponent, sideNavComponent, TaskComponent, DirectorComponent, DirectorListComponent, DirectorListNestedComponent, ChartComponent ]

@NgModule({
  declarations: [
    CUSTOM_COMPONENT
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    PanelModule,
    MenuModule,
    TabViewModule,
    DataTableModule,
    SharedModule,
    RoutingModule,
    MultiSelectModule,
    FusionChartsModule.forRoot(FusionCharts, Charts)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
