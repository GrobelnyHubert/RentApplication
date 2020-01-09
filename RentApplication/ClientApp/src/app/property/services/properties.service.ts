import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Property } from '../../../models/property';
import { PropertiesBackendService } from '../../../services/properties-backend-service';

@Injectable()
export class PropertiesService {
    constructor(private propertiesBackendService: PropertiesBackendService) { }

        addProperty(newProperty: Property): Observable<number> {
            return this.propertiesBackendService.addProperty(newProperty);
    }
    getProperty(propertyId: number): Observable<Property> {
        return this.propertiesBackendService.getProperty(propertyId);
    }
    getProperties(): Observable<Property[]> {
        return this.propertiesBackendService.getProperties();
    }
    updateProperty(updateProperty: Property): Observable<Property> {
        return this.updateProperty(updateProperty);
    }
    deleteProperty(propertyId: number): Observable<number> {
        return this.propertiesBackendService.deleteProperty(propertyId);
    }
}
