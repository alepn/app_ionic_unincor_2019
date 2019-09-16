import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  
  public posts;
  public page;
  public total_page;

  constructor(private apiService: ApiService) {

    this.page = 1;

    this.apiService.getPosts(this.page).subscribe((data)=>{
      console.log(data);
      this.posts = data.data;
    });

  }

  loadMoreData(event) {

    this.page++;

    this.apiService.getPosts(this.page).subscribe((data)=>{
      this.posts = data.data;
      event.target.complete();
    });

  }


  ngOnInit() {}

}
