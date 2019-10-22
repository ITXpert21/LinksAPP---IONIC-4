import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  constructor(private http: HttpClient) { }

  getVendors() {
    return this.http.post<any>('http://mobileapp.linksincdb.org/vendors.php', {})
        .pipe(map(catalogue => {
            return catalogue;
        }));  
  }
}
