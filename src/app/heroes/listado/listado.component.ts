import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman', 'Ironman','hulk','Thor','Capitan America'];
  heroesBorrados: string = '';

  borrarHeroe(){
    console.log('borrando...');
    this.heroesBorrados = this.heroes.shift() || '';
    
  }



}
