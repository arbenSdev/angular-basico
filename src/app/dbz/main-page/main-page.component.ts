import { Component } from '@angular/core';


import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzServices } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {


  nuevo: Personaje = {
    nombre: "Muten Roshi",
    poder : 4000
  }

  constructor( ) {

  }

}
