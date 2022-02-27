import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SistemaEscolarPublicas';

  public menu = [
    {
      label: 'Menu',
      items: [
          [
              {
                  label: 'Escolas',
                  items: [
                  {label: 'Cadastar', routerLink: ['/registerSchool']},
                   {label: 'Listar', routerLink: ['/listSchool']}],                  
              }
          ]
      ]        
    }
  ]
}
