import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { convertirEnURL } from '../../shared/util/utilidades';

@Component({
  selector: 'app-opcion-menu',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './opcion-menu.component.html',
  styleUrl: './opcion-menu.component.scss'
})
export class OpcionMenuComponent {
  @Input() titulo: string = '';
  @Input() icono: string = '';
  @Input() colorFondo: string = 'black';
  @Input() colorLetras: string = 'white';
  @Input() colorFondoLetras: string = 'black';
  @Input() infoDeshabilitada: boolean = false;

  visibleInfo: boolean = false;

  constructor(private router: Router) {}

  info() {
    this.visibleInfo = true;
  }

  navegarAJuego() {
    this.router.navigateByUrl(convertirEnURL(this.titulo));
  }
}
