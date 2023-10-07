import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestFetchService {

  private apiUrl = 'https://localhost:7101/';
  
  constructor(private http: HttpClient) {}

  getData() : Observable<any> {
    const endpoint = `${this.apiUrl}api/test`;
    return this.http.get<any>(endpoint);
  }
}
