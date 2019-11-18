import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  
  public posts:any;
  public page:any;
  public total_page:any;

  constructor(private apiService: ApiService, private modalController: ModalController, private alertController: AlertController, private router: Router) {

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

  editItem(post) {

    let navigationExtras: NavigationExtras = {
      state: {
        formDataParams: post
      }
    };
    this.router.navigate(['/formulario'], navigationExtras);

  }

  async deleteItem(post) {

    await this.apiService.sendDeleteRequest(post.id).subscribe((data)=>{
      console.log(data);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, error => {
      console.log(error);
    });

    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Deletado!',
      message: 'Item excluído com sucesso!',
      buttons: ['OK']
    });

    await alert.present();

  }


  ngOnInit() {}

}
