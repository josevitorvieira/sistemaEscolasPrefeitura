import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // public escola: any = [
  //   {
  //     nome: "costa rego",
  //     nivel: "medio"
  //   },
  //   {
  //     nome: "pedro correia",
  //     nivel: "fundamental"
  //   }  
  // ]

  // public items = [
  //   {
  //     label: 'Menu',
  //     items: [
  //         [
  //             {
  //                 label: 'Escolas',
  //                 items: [{label: 'Cadastar'}, {label: 'Listar'}]
  //             }
  //         ]
  //     ]        
  //   }
  // ]  

  constructor() { }

  ngOnInit(): void {
  }

}
