import { Injectable } from '@angular/core';
import { Juegos } from '../enums/juegos-enum';

export class OpcionesPorJuego {
  juego: Juegos;
  tiempo: number = 60; //En segundos
  numeroDescartes: number = 0;

  constructor(juego: Juegos) {
    this.juego = juego;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  opcionesPorJuego: OpcionesPorJuego[] = [
    new OpcionesPorJuego(Juegos.Tabu),
    new OpcionesPorJuego(Juegos.MimicaYSonido),
    new OpcionesPorJuego(Juegos.Pintar),
    new OpcionesPorJuego(Juegos.Marcas),
    new OpcionesPorJuego(Juegos.Preguntas),
    new OpcionesPorJuego(Juegos.Ocurrencias),
  ]

  constructor() {
    this.opcionesPorJuego = JSON.parse(localStorage.getItem('opcionesPorJuego')!) || this.opcionesPorJuego;
  }

  setOpcionesJuego(juego: Juegos, tiempo: number, numeroDescartes: number): void {
    let opcionesJuego = this.opcionesPorJuego.find(opciones => opciones.juego == juego);
    if (opcionesJuego) {
      opcionesJuego.tiempo = tiempo;
      opcionesJuego.numeroDescartes = numeroDescartes;
      
      localStorage.setItem('opcionesPorJuego', JSON.stringify(this.opcionesPorJuego));
    }
  }
}
