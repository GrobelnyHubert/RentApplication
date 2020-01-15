import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address';


@Injectable()
export abstract class AddressesBackendService {
  abstract addAddress(newAddress: Address);
  abstract updateAddress(newddress: Address);
  abstract getAll(): Observable<Array<Address>>;
  abstract getAddress(id: number): Observable<Address>;
}
