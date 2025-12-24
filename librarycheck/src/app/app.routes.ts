import { Routes } from '@angular/router';
import { Exchange } from './component/exchange/exchange';
import { Domi } from './component/domi/domi';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'exchange',
    pathMatch: 'full',
  },
  {
    path: 'exchange',
    component: Exchange,
  },
  {
    path: 'domi',
    component: Domi,
  },
];
