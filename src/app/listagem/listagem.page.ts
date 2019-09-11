import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  
  public posts;

  constructor(private apiService: ApiService) {

    this.apiService.getPosts().subscribe((data)=>{
      console.log(data);
      this.posts = data;
    });

  }

  ngOnInit() {}

}
