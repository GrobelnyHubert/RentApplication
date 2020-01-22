import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner';


@Injectable()
export abstract class OwnerBackendService {
    abstract addOwner(newOwner: Owner);
  abstract updateOwner(newOwner: Owner);
  abstract getAll(): Observable<Array<Owner>>;
  abstract getOwner(id: number): Observable<Owner>;
}
