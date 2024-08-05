import { Component } from '@angular/core';
import { OpcionMenuComponent } from '../../components/opcion-menu/opcion-menu.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [OpcionMenuComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
