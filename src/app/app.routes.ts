import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'telaPrincipal',
    loadComponent: () => import('./tela-principal/tela-principal').then((m) => m.TelaPrincipal),
  },
  {
    path: 'telaDetalhes',
    loadComponent: () => import('./tela-detalhes/tela-detalhes.component').then((m) => m.TelaDetalhesComponent),
  },
  {
    path: '',
    redirectTo: 'telaPrincipal',
    pathMatch: 'full',
  },
];
