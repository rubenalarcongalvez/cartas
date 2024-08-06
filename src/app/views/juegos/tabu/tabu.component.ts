import { Component } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';
import { Juegos } from '../../../shared/enums/juegos-enum';

@Component({
  selector: 'app-tabu',
  standalone: true,
  imports: [],
  templateUrl: './tabu.component.html',
  styleUrl: './tabu.component.scss'
})
export class TabuComponent {
  get value() {
    return this.globalService.opcionesPorJuego.find(opciones => opciones.juego == Juegos.Tabu);
  }
  
  constructor(private globalService: GlobalService) {
    console.log(globalService.opcionesPorJuego);
  }

  ngAfterViewInit() {
    this.globalService.setOpcionesJuego(Juegos.Tabu, 60, 3);
    console.log(this.value);
  }
}
