import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { Message } from 'primeng/api';
import { Address } from '../../models/address';
import { AddressesBackendService } from '../../services/addresses-backend-service';
import { AddressesService } from './service/addresses.service';
import { BaseComponent } from '../../common/base.component';


@Component({
    templateUrl: './new-address.component.html',
    selector: 'new-address',
})

export class NewAddressComponent extends BaseComponent implements OnInit {
    constructor(
        private activatedRouter: ActivatedRoute,
        private addressService: AddressesService,
        private location: Location
    ) { super(activatedRouter, location) }

    address: Address;
    urlParam: number;
    pageTitle: string = 'Lokalizacja nieruchomości';
    isInAddressDetailsMode: boolean = false;

    @Input() receivedId: number;
    @Output() addressAddedEvent: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit(): void {
        this.detectUrlParam();
        this.address = new Address();
        this.messages = new Array<Message>();

        if (this.location.isCurrentPathEqualTo("/properties/new-property")) {
            this.pageTitle = "Nowa nieruchomość";
        }
        else if (this.location.isCurrentPathEqualTo("/properties/property-update/" + this.urlParam)) {
            this.downloadAddress(this.receivedId);
            this.isInEditMode = true;
        }
        else if (this.location.isCurrentPathEqualTo("/properties/property-details/" + this.urlParam)) {
            this.downloadAddress(this.receivedId);
            this.isInEditMode = false;
        }
        else if (this.location.isCurrentPathEqualTo("/addresses/address-details/" + this.urlParam)) {
            this.downloadAddress(this.urlParam);
            this.isInAddressDetailsMode = true;
            this.isInEditMode = false;
        }
        else if (this.location.isCurrentPathEqualTo("/addresses/address-update/" + this.urlParam)) {
            this.downloadAddress(this.urlParam);
            this.isInAddressDetailsMode = true;
            this.isInEditMode = true;
        }
    }
    onSubmit(newAddress: Address): void {
        if ((this.location.isCurrentPathEqualTo("/properties/property-update" + this.urlParam)) ||
            (this.location.isCurrentPathEqualTo("/owners/owner-update" + this.urlParam))) {
            this.addressService.updateAddress(newAddress).subscribe(
                id => {
                    this.showMessage(false, 'success', 'Confirmation', true, 'Address has been created successfully'),
                        this.addressAddedEvent.emit(id);
                },
                errorMessage => this.showMessage(true, 'warn', 'Inforamtion', false, errorMessage)
            )
        }
        else {
            this.addressService.addAddress(newAddress).subscribe(
                id => {
                    this.showMessage(false, 'success', 'Confirmation', false, 'Address has been created successfully');
                    this.addressAddedEvent.emit(id);
                },
                errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage)
            )
        }
    }

    detectUrlParam(): void {
        this.activatedRouter.params.subscribe((params: Params) => {
            this.urlParam = params['id'];
        })
    }
    downloadAddress(id: number): void {
        this.addressService.getAddress(id).subscribe(
            address => this.address = address,
            errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage)

        )
    }
}
