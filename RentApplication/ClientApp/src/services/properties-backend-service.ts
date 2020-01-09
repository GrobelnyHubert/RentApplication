import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../models/Property';

@Injectable()
export abstract class PropertiesBackendService {
    abstract addProperty(newProperty: Property);

  abstract getProperty(id: number): Observable<Property>;

  abstract getProperties(): Observable<Property[]>;

    abstract updateProperty(updateProperty: Property);

    abstract deleteProperty(propertyId: number);
} 
