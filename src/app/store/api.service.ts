import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAgencies$ = () => this.http.get('/assets/json/launchagencies.json')
    .pipe(map((res: any) => res.agencies))

  public getMissions$ = () => this.http.get('/assets/json/launchmissions.json')
    .pipe(map((res: any) => res.types))

  public getStatus$ = () => this.http.get('/assets/json/launchstatus.json')
    .pipe(map((res: any) => res.types))

  public getLaunches$ = () => this.http.get('/assets/json/launchlibrary.json')
    .pipe(map((res: any) => res.launches))

}
