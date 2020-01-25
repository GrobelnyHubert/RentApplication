import { Component, OnInit } from '@angular/core';
import { Property } from '../../../models/property';
import { PropertiesService } from '../services/properties.service';
import { Router } from '@angular/router';
import _ from 'lodash';
import { ConfirmationService, Message } from 'primeng//api';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BaseComponent } from '../../../common/base.component';

@Component({
    templateUrl: './properties.component.html'
})

export class PropertiesComponent extends BaseComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private propertiesService: PropertiesService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) { super(activatedRoute, location) };

  properties: Array<Property> = new Array<Property>();
  pageTitle: string = "Lista dostępnych nieruchomości";

  ngOnInit(): void{
    this.messages = new Array<Message>();
    this.downloadProperties();
  }
  downloadProperties(): void {
    this.propertiesService.getProperties().subscribe(
      propertiesFromDB => this.properties = propertiesFromDB,
      errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage)
    );
     
  }
  getProperty(id: number): void {
    this.router.navigate(['./properties/property-details', id]);
    }

    updateProperty(id: number): void {
      this.router.navigate(['./properties/property-update', id]);
  }
  deleteProperty(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this property?',
      header: 'Confirmation',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.propertiesService.deleteProperty(id).subscribe(
          onSuccess => {
            this.showMessage(false, 'success', 'Cinfirmation', true, 'Property has been deleted succesfully')
            this.properties.splice(this.properties.findIndex(prop => prop.Id === id), 1);
          },
          errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage)
        );
      },
    })
   
  }

  }
 

