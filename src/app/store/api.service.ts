import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://launchlibrary.net/1.4/launch/1950-01-01?limit=2000';
  private p = environment.url + '/assets/json/';

  constructor(private http: HttpClient) {
    // this.url = this.p + 'launchlibrary.json';
   }

  public getLaunches$ = () => this.http.get(this.url)
    .pipe(map((res: any) => res.launches))

  public getAgencies$ = () => this.http.get(this.p + 'launchagencies.json')
    .pipe(map((res: any) => res.agencies))

  public getMissions$ = () => this.http.get(this.p + 'launchmissions.json')
    .pipe(map((res: any) => res.types))

  public getStatus$ = () => this.http.get(this.p + 'launchstatus.json')
    .pipe(map((res: any) => res.types))

}
