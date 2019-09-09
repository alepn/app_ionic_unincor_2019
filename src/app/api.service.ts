import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(`https://www.reddit.com/r/soccer/top/.json?t=month&limit=10`);
  }
}
