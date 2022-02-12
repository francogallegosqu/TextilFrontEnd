import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompositionService {

  constructor(private http: HttpClient) { }

  getAllCompositions() {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", 0)
      .append("size", 50)
      .append("sortDir", "asc")
      .append("sort", "percentageComposition");
    return this.http.get(`${environment.HOST}/compositions`, { params: queryParams });
  }
}
