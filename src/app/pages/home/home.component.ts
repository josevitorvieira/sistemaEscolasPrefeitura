import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public escola: any = [
    {
      nome: "costa rego",
      nivel: "medio"
    },
    {
      nome: "pedro correia",
      nivel: "fundamental"
    }  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
