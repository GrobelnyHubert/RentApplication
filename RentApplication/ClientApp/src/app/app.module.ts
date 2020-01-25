
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

import { NewAddressComponent } from './address/new-address.component'
import { HttpAddressesBackendService } from '../services/http-addresses-backend-service';
import { AddressesBackendService } from '../services/addresses-backend-service';
import { AddressesService } from './address/service/addresses.service';
import { AddressesComponent } from './address/addresses.component';

import { NewOwnerComponent } from './owners/new-owner'
import { HttpOwnerBackendService } from '../services/http-owners-backend-service';
import { OwnerBackendService } from '../services/owners-backend.service';
import { OwnersService } from './owners/service/owners.service';
import { OwnersComponent } from './owners/owners.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProgressSpinnerModule, ConfirmDialogModule } from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PropertiesComponent,
    PropertyDetailsComponent,
    NewOwnerComponent,
    OwnersComponent,
    NewAddressComponent,
    AddressesComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,    
      ProgressSpinnerModule,
      HttpClientModule,
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: 'properties/new-property', component: PropertyDetailsComponent },
      { path: 'properties/property-details/:id', component: PropertyDetailsComponent },
      { path: 'properties/property-update/:id', component: PropertyDetailsComponent },
        { path: 'owners', component: OwnersComponent },
        { path: 'owners/owner-details/:id', component: NewOwnerComponent },
        { path: 'owners/owner-update/:id', component: NewOwnerComponent },
        { path: 'addresses', component: AddressesComponent },
        { path: 'addresses/address-details/:id', component: NewAddressComponent },
        { path: 'addresses/address-update/:id', component: NewAddressComponent },
    ])
  ],
    providers: [
        PropertiesService, {
            provide: PropertiesBackendService, useClass: HttpPropertiesBackendService
        },
        OwnersService,
        {
            provide: OwnerBackendService, useClass: HttpOwnerBackendService
        },
        AddressesService,
        {
            provide: AddressesBackendService, useClass: HttpAddressesBackendService
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
