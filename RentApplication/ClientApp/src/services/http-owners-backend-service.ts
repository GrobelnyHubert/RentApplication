import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OwnerBackendService } from './owners-backend.service';
import { Owner } from '../models/owner';

@Injectable()
export class HttpOwnerBackendService extends OwnerBackendService {

    private addOwnerUrl: string = "api/owners/addowner";
    private getAllUrl: string = "api/owners/getowners";
    private updateOwnerUrl: string = "api/owners/updateowner";
    private getOwnerUrl: string = "api/owners/getowner?ownerId=";


    constructor(private http: HttpClient) {
        super();

    }
    addOwner(newOwner: Owner) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<Owner>(this.addOwnerUrl, JSON.stringify(newOwner), { headers })
    }
    updateOwner(newOwner: Owner) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<Owner>(this.updateOwnerUrl, JSON.stringify(newOwner), { headers });
    }
    getAll(): Observable<Owner[]> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<Owner[]>(this.getAllUrl, { headers });
    }
    getOwner(id: number): Observable<Owner> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<Owner>(this.getOwnerUrl + id, { headers });
    }
}
