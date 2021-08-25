import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.validaNome()
  }

  validaNome() {
    let nome = (<HTMLInputElement>document.querySelector('#nome')).value
    if (nome?.length < 5){
    
    }else{
    
    }
  }

}
