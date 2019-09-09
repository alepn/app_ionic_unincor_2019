import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	posts;

  constructor(private apiService: ApiService) {

  	this.apiService.getPosts().subscribe((data)=>{
      console.log(data);
      this.posts = data['data']['children'];
    });

  }

}
