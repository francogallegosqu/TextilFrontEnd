import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  getAllSubcategories() {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", 0)
      .append("size", 50)
      .append("sortDir", "asc")
      .append("sort", "nameCategory");
    return this.http.get(`${environment.HOST}/subcategories`, { params: queryParams });
  }
}
