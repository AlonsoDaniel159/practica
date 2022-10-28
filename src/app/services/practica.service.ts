import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticaService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://restcountries.com/v3.1/region/Americas');
  }
}
