import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  
  public posts:any;
  public page:any;
  public total_page:any;

  constructor(private apiService: ApiService, private modalController: ModalController) {

    this.page = 1;

    this.apiService.getPosts(this.page).subscribe((data:any)=>{
      console.log(data);
      this.total_page = data.total_page;
      this.posts = data.data;
    });

  }

  loadMoreData(event) {
    
    this.page++;

    this.apiService.getPosts(this.page).subscribe((data:any)=>{
      this.posts = this.posts.concat(data.data);
      event.target.complete();
      if (this.total_page == this.page) {
        event.target.disabled = true;
      }
    });

  }

  async presentModal(post) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'firstName': post.first_name,
        'lastName': post.last_name,
        'modalController': this.modalController
      }
    });
    return await modal.present();
  }


  ngOnInit() {}

}
