import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../../../models/address';
import { AddressesBackendService } from '../../../services/addresses-backend-service';

@Injectable()
export class AddressesService {
    constructor(private addressesBackendService: AddressesBackendService) { }

    addAddress(newAddress: Address) {
        return this.addressesBackendService.addAddress(newAddress);
    }
    updateAddress(newAddress: Address) {
        return this.addressesBackendService.updateAddress(newAddress);
    }
    getAll(): Observable<Array<Address>> {
        return this.addressesBackendService.getAll();
    }
    getAddress(id: number) {
        return this.addressesBackendService.getAddress(id);
    }
}
