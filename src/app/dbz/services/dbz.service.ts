import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzServices {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder : 15000
    },
    {
      nombre: 'Vegeta',
      poder : 13000
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {
    
  }

  agregarPersonaje( pj: Personaje ) {
    this._personajes.push( pj );
  }

}