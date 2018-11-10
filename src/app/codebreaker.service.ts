import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodebreakerService {

  urlBuscar : string ="https://api-code-breaker.herokuapp.com/guess/";

  constructor(public http: HttpClient) { }

  public guestNumber(body: string) : any {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'accept': 'application/json'
      })
    };
    return this.http.post(this.urlBuscar, JSON.parse(body), httpOptions);
  }

  public guestNumberValue(value: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': 'application/json'
      })
    };
    return this.http.get(this.urlBuscar+value, httpOptions);
  }

}
