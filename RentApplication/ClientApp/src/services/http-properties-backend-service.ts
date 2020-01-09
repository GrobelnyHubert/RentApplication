import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../models/Property';
import { PropertiesBackendService } from '../services/properties-backend-service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"

@Injectable()
export class HttpPropertiesBackendService extends PropertiesBackendService {

  private addPropertyUrl: string = "api/property/addproperty";
  private getPropertyUrl: string = "api/property/getproperty?propertyId=";
  private getPropertiesUrl: string = "api/property/getproperties";
  private updatePropertyUrl: string = "api/property/updateproperty";
  private deletePropertyUrl: string = "api/property/deleteproperty?propertyId=";

  private jsonContentOptions: RequestOptions;
  constructor(private http: HttpClient) {
    super();
    let headersJson: Headers = new Headers({
      'Content-Type': 'application/json',
    });
  }
    addProperty(newProperty: Property) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<Property>(this.addPropertyUrl, JSON.stringify(newProperty), { headers } )
    }
    getProperty(id: number): Observable<Property> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<Property>(this.getPropertyUrl + id, { headers } );
    }
    getProperties(): Observable<Property[]> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<Property[]>(this.getPropertiesUrl, { headers } );
    }
    updateProperty(updateProperty: Property){
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<Property>(this.updatePropertyUrl, JSON.stringify(updateProperty), { headers });
    }
    deleteProperty(propertyId: number) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<Property>(this.deletePropertyUrl + propertyId, { headers })
    }


}
