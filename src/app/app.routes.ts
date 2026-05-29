import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Regularizacaoassistida } from './pages/regularizacaoassistida/regularizacaoassistida';
import { Solicitarregularizacao } from './pages/regularizacaoassistida/solicitarregularizacao/solicitarregularizacao';
import { Autosupervisaoocupacional } from './pages/autosupervisaoocupacional/autosupervisaoocupacional';
import { Preencherautosupervisao } from './pages/autosupervisaoocupacional/preencherautosupervisao/preencherautosupervisao';
import { Moradia } from './pages/autosupervisaoocupacional/preencherautosupervisao/moradia/moradia';
import { Producaoanimal } from './pages/autosupervisaoocupacional/preencherautosupervisao/producaoanimal/producaoanimal';
import { Producaoagricola } from './pages/autosupervisaoocupacional/preencherautosupervisao/producaoagricola/producaoagricola';
import { Benfeitorias } from './pages/autosupervisaoocupacional/preencherautosupervisao/benfeitorias/benfeitorias';
import { Documentos } from './pages/autosupervisaoocupacional/preencherautosupervisao/documentos/documentos';
import { Revisar } from './pages/autosupervisaoocupacional/preencherautosupervisao/revisar/revisar';
import { Servicos } from './pages/home/servicos/servicos';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'regularizacaoassistida', component: Regularizacaoassistida },
    { path: 'regularizacaoassistida/solicitarregularizacao', component: Solicitarregularizacao },
    { path: 'autosupervisaoocupacional', component: Autosupervisaoocupacional },
    { path: 'autosupervisaoocupacional/preencherautosupervisao', component: Preencherautosupervisao },
    { path: 'autosupervisaoocupacional/preencherautosupervisao/moradia', component: Moradia },
    { path: 'autosupervisaoocupacional/preencherautosupervisao/producaoanimal', component: Producaoanimal },
    { path: 'autosupervisaoocupacional/preencherautosupervisao/producaoagricola', component: Producaoagricola },
    { path: 'autosupervisaoocupacional/preencherautosupervisao/benfeitorias', component: Benfeitorias },
    { path: 'autosupervisaoocupacional/preencherautosupervisao/documentos', component: Documentos },
    { path: 'autosupervisaoocupacional/preencherautosupervisao/revisar', component: Revisar },
    { path: 'servicos', component: Servicos }
];