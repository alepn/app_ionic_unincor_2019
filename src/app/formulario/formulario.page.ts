import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

	formData = {
		name: '',
		job: ''
	}

  constructor(private apiService: ApiService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async formSubmit(){

    await this.apiService.sendPostRequest(this.formData).subscribe((data)=>{
    	console.log(data);
    }, error => {
  		console.log(error);
  	});

    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Formulário API',
      message: 'Dados enviados com sucesso.',
      buttons: ['OK']
    });

    await alert.present();

  }

}
