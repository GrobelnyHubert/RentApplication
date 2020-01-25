import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ConfirmationService, Message } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BaseComponent } from '../../common/base.component';
import { Owner } from '../../models/owner';
import { OwnersService } from './service/owners.service';

@Component({
    templateUrl: './owners.component.html'
})

export class OwnersComponent extends BaseComponent implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private ownersService: OwnersService,
        private router: Router,
    ) { super(activatedRoute, location) };

    owners: Array<Owner> = new Array<Owner>();
    pageTitle: string = "Lista właścicieli";

    ngOnInit(): void {
    
        this.downloadOwners();
    }
    downloadOwners(): void {
        this.ownersService.getAll().subscribe(
            owner => this.owners = owner,
            errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage)
        );

    }
    getOwner(id: number): void {
        this.router.navigate(['./owners/owner-details', id]);
    }

    updateOwner(id: number): void {
        this.router.navigate(['./owners/owner-update', id]);
    }

}


