import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts`);
  }
}
