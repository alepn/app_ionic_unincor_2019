import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  
  public itens: Array<{ titulo: string; descricao: string }> = [];
 

  constructor() { 

  	for (let i = 0; i < 5; i++) {
  		let objeto = {
			titulo: 'Elemento ' + (i+1),
			descricao: 'Este é o elemento nº ' + (i+1)        
		} 

		this.itens.push(objeto);
    }

  }

  ngOnInit() {
  }

}
