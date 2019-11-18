import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPosts(page){
    return this.httpClient.get(`https://reqres.in/api/users?page=${page}`);
  }

  sendPostRequest(postData) {

    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
    };

//  let postData = {
//      "name": "morpheus",
//      "job": "leader"
//  }

    return this.httpClient.post("https://reqres.in/api/users", postData, httpOptions);
    
  }

  sendPutRequest(id, postData) {

    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
    };

    return this.httpClient.put(`https://reqres.in/api/users/${id}`, postData, httpOptions);
    
  }

  sendDeleteRequest(id){
    return this.httpClient.delete(`https://reqres.in/api/users/${id}`);
  }

}
