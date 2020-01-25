import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Property } from '../../../models/property';
import { PropertiesService } from '../services/properties.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';
import { Message } from 'primeng/api';
import { Owner } from '../../../models/owner';
import { BaseComponent } from '../../../common/base.component';


@Component({
    templateUrl: './property-details.component.html'
})

export class PropertyDetailsComponent extends BaseComponent implements OnInit {
    constructor(
        private propertiesService: PropertiesService,
        private activatedRoute: ActivatedRoute,
        private location: Location
       
    ) { super(activatedRoute, location) };

    pageTitle: string;
    urlParam: number;
    ownerBtnTitle: string = 'Dane właściciela';
    addressBtnTitle: string = 'Lokalizacja';

  owner: Owner = new Owner();
  property: Property = new Property();

  isUpdatePage: boolean = false;
  isNewOwnerModeActivated: boolean = false;
  isNewAddressModeActivated: boolean = false;

  ownerAddedEvent(id: number): void {
    this.property.ownerId = id;
  }
  addressAddEvent(id: number): void {
    this.property.addressId = id;
  }
  ngOnInit(): void {
        this.messages = new Array<Message>();
        this.detectUrlParam();

        if (this.location.isCurrentPathEqualTo("/properties/new-property")) {
          this.pageTitle = "Nowa nieruchomość";
          this.ownerBtnTitle = "Dodaj właściciela";
          this.addressBtnTitle = "Dodaj lokalizację";
        }
        else if (this.location.isCurrentPathEqualTo("/properties/property-update/" + this.urlParam)) {
          this.pageTitle = "Aktualizacja nieruchomości";
          this.ownerBtnTitle = "Aktualizuj właściciela";
          this.addressBtnTitle = "Aktualizuj lokalizację";
            this.downloadProperty();
            console.log(this.location.normalize);
        }
        else {
            this.pageTitle = "Szczegóły nieruchomości";
            this.isInEditMode = false;
            this.downloadProperty();
          
        }

    }
  activateNewAddressMode(): void {
    this.isNewAddressModeActivated == true ? this.isNewAddressModeActivated = false : this.isNewAddressModeActivated = true;
  }
  activateNewOwnerMode(): void {
    this.isNewOwnerModeActivated == true ? this.isNewOwnerModeActivated = false : this.isNewOwnerModeActivated = true;
  }
    downloadProperty(): void {
      this.propertiesService.getProperty(this.urlParam).subscribe(
        propertyFromDb => this.property = propertyFromDb,
        errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage)
        );
    }

  onSubmit(propertyObject: Property): void {
    if (propertyObject.addressId == undefined || propertyObject.addressId < 0 || propertyObject.ownerId == undefined || propertyObject.ownerId < 0) {
      return this.showMessage(true, 'Warning', 'Information', false, 'Before submitting property you need to create owner and address')
    }
        if (this.location.isCurrentPathEqualTo("/properties/new-property")) {
        
            this.propertiesService.addProperty(propertyObject).subscribe(
                onSuccess => this.showMessage(false, 'success', 'Confirmation', true,'Property has been created successfully'),
              onError => this.showMessage(false, 'warn', 'Inforamtion', false, onError)
            )
        } else {
            this.propertiesService.updateProperty(propertyObject).subscribe(
              onSucces => this.showMessage(false, 'success', 'Confirmation', true, 'Property has been created successfully'),
              onError => this.showMessage(false, 'warn', 'Inforamtion', false, onError)
            )
        }
    }

    detectUrlParam(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.urlParam = params['id'];
        })
    }

}
