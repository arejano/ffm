import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json;chrset=UTF-8',
    'Accept-Language': 'pt-BR',
    // 'x-api-key':'key'
  })
}

const base_url: string = 'http://192.168.0.4:3000/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get(url: string): Observable<any> {
    return this.httpClient.get(`${base_url}${url}`, {
      ...httpOptions,
      // responseType: 'blob',
    })
  }

  post(url: string, data: any): Observable<any> {
    return this.httpClient.post(
      `${base_url}${url}`,
      data,
      httpOptions
    )
  }
}
