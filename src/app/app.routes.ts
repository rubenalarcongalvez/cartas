import { Routes } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';

export const routes: Routes = [
    { path: '', component: MenuComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' }
];
