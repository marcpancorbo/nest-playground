import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  getTodos(){
    return this.httpClient.get(`${environment.baseURL}/cats`)
  }
}
