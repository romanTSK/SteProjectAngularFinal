import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://api.everrest.educata.dev/shop/products/search';

  constructor(private http: HttpClient) { }

  getData(keyWord?: string, maxPrice?: string, minPrice?: string): Observable<any[]> {
    let params = new HttpParams()
      .set('page_index', '1')
      .set('page_size', '50');

    if (keyWord) {
      params = params.set('keywords', keyWord);
    }
    if (minPrice) {
      params = params.set('price_min', minPrice);
    }
    if (maxPrice) {
      params = params.set('price_max', maxPrice);
    }

    return this.http.get<any[]>(this.apiUrl, { params });
  }
}
