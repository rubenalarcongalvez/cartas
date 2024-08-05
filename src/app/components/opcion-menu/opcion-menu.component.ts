import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

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

  info() {
    this.visibleInfo = true;
  }
}
