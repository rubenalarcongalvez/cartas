import { Routes } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';
import { TabuComponent } from './views/juegos/tabu/tabu.component';
import { MimicaYSonidoComponent } from './views/juegos/mimica-y-sonido/mimica-y-sonido.component';
import { PintarComponent } from './views/juegos/pintar/pintar.component';
import { MarcasComponent } from './views/juegos/marcas/marcas.component';
import { PreguntasComponent } from './views/juegos/preguntas/preguntas.component';
import { OcurrenciasComponent } from './views/juegos/ocurrencias/ocurrencias.component';

export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'tabu', component: TabuComponent },
    { path: 'mimica-y-sonido', component: MimicaYSonidoComponent },
    { path: 'pintar', component: PintarComponent },
    { path: 'marcas', component: MarcasComponent },
    { path: 'preguntas', component: PreguntasComponent },
    { path: '@currencias', component: OcurrenciasComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' }
];
