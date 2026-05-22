import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Regularizacaoassistida } from './pages/regularizacaoassistida/regularizacaoassistida';
import { Solicitarregularizacao } from './pages/regularizacaoassistida/solicitarregularizacao/solicitarregularizacao';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'regularizacaoassistida', component: Regularizacaoassistida },
    { path: 'regularizacaoassistida/solicitarregularizacao', component: Solicitarregularizacao }
];