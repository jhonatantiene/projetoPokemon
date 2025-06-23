import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'telaPrincipal',
    loadComponent: () => import('./tela-principal/tela-principal').then((m) => m.TelaPrincipal),
  },
  {
    path: 'telaDetalhes/:id',
    loadComponent: () => import('./tela-detalhes/tela-detalhes.component').then((m) => m.TelaDetalhesComponent),
  },
  {
    path: 'telaFavoritos',
    loadComponent: () => import('./tela-favoritos/tela-favoritos.component').then((m) => m.TelaFavoritosComponent),
  },
  {
    path: '',
    redirectTo: 'telaPrincipal',
    pathMatch: 'full',
  },
];
