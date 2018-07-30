import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import {MatDividerModule} from '@angular/material/divider';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AgmCoreModule } from '@agm/core';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FusionChartsModule,
    MatDividerModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0oeyUX5xqqf1qkJ1zhkuY8ThIR0ejvjY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
