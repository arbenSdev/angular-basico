import { Component } from '@angular/core';
import { DbzServices } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{


  get personajes() {
    return this.dbzServices.personajes;
  }

  constructor( private dbzServices: DbzServices ){
    
  }
}
