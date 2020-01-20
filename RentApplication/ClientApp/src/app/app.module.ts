
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { PropertiesComponent } from './properties/components/properties.component';
import { PropertiesService } from './properties/services/properties.service';
import { PropertiesBackendService } from '../services/properties-backend-service';
import { HttpPropertiesBackendService } from '../services/http-properties-backend-service';
import { PropertyDetailsComponent } from './properties/components/property-details.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PropertiesComponent,
    PropertyDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'properties', component: PropertiesComponent },
        { path: 'properties/new-property', component: PropertyDetailsComponent },
        { path: 'properties/property-details/:id', component: PropertyDetailsComponent },
        { path: 'properties/property-update/:id', component: PropertyDetailsComponent }
    ])
  ],
    providers: [
        PropertiesService, {
            provide: PropertiesBackendService, useClass: HttpPropertiesBackendService
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
