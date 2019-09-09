import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagemm',
  templateUrl: './listagemm.page.html',
  styleUrls: ['./listagemm.page.scss'],
})
export class ListagemmPage implements OnInit {

public itens: Array<{ titulo: string; descricao: string}> = [];

  constructor() {

  	for (let i = 0; i < 5; i++) {
	  	let objeto = {
	        titulo: 'Elemento ' + (i+1),
	        descricao: 'This is item #' + (i+1)
	    }
  		this.itens.push(objeto);
    }

   }

  ngOnInit() {
  }

}
