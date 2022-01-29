import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) { }

  getCountries(page: number, size: number){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page)
                             .append("size", size)
                             .append("sortDir", "asc")
                             .append("sort", "idCountry");
    return this.http.get(`${environment.HOST}/countries`, {params: queryParams});
  }

  getDepartmentsByCountryId(countryId: string, page: number, size: number){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page)
                             .append("size", size)
                             .append("sortDir", "asc")
                             .append("sort", "idDepartment");
    return this.http.get(`${environment.HOST}/departments`, {params: queryParams});
  }

  getCitiesByDepartmentId(departmentId: string, page: number, size: number){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page)
                             .append("size", size)
                             .append("sortDir", "asc")
                             .append("sort", "idCity");
    return this.http.get(`${environment.HOST}/cities`, {params: queryParams});
  }
}
