import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../../../models/owner';
import { OwnerBackendService } from '../../../services/owners-backend.service';

@Injectable()
export class OwnersService {
    constructor(private ownerBackendService: OwnerBackendService) { }

    addOwner(newOwner: Owner) {
        return this.ownerBackendService.addOwner(newOwner);
    }
    updateOwner(newOwner: Owner) {
        return this.ownerBackendService.updateOwner(newOwner);
    }
    getAll(): Observable<Array<Owner>> {
        return this.ownerBackendService.getAll();
    }
    getOwner(id: number) {
        return this.ownerBackendService.getOwner(id);
    }
}
