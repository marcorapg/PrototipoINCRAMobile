import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gestaoinadimplencia } from './pages/cobranca/gestaoinadimplencia/gestaoinadimplencia';
import { Visualizarcaso } from './pages/cobranca/gestaoinadimplencia/visualizarcaso/visualizarcaso';
import { Painelgerencial } from './pages/cobranca/gestaoinadimplencia/painelgerencial/painelgerencial';
import { Processamentolote } from './pages/cobranca/gestaoinadimplencia/processamentolote/processamentolote';
import { Gestaonotificacao } from './pages/centralnotificacoes/gestaonotificacao/gestaonotificacao';
import { Gestaotemplate } from './pages/centralnotificacoes/gestaotemplate/gestaotemplate';
import { Editartemplate } from './pages/centralnotificacoes/gestaotemplate/editartemplate/editartemplate';
import { Visualizarnotificacao } from './pages/centralnotificacoes/gestaonotificacao/visualizarnotificacao/visualizarnotificacao';
import { Gestaoenvio } from './pages/centralnotificacoes/gestaoenvio/gestaoenvio';
import { Visualizarenvio } from './pages/centralnotificacoes/gestaoenvio/visualizarenvio/visualizarenvio';
import { Centralnotificacoes } from './pages/centralnotificacoes/centralnotificacoes';


export const routes: Routes = [
    { path: '', component: Home },

    //Cobrança
    { path: 'cobranca/gestaoinadimplencia', component: Gestaoinadimplencia },
    { path: 'cobranca/gestaoinadimplencia/visualizarcaso/:id', component: Visualizarcaso },
    { path: 'cobranca/gestaoinadimplencia/painelgerencial', component: Painelgerencial },
    { path: 'cobranca/gestaoinadimplencia/processamentolote', component: Processamentolote }, 

    //Central de notificações
    { path: 'centralnotificacoes', component: Centralnotificacoes }, 
    { path: 'centralnotificacoes/gestaonotificacao', component: Gestaonotificacao }, 
    { path: 'centralnotificacoes/gestaotemplate', component: Gestaotemplate },
    { path: 'centralnotificacoes/gestaotemplate/editartemplate', component: Editartemplate },
    { path: 'centralnotificacoes/gestaonotificacao/visualizarnotificacao', component: Visualizarnotificacao },
    { path: 'centralnotificacoes/gestaoenvio', component: Gestaoenvio }, 
    { path: 'centralnotificacoes/gestaoenvio/visualizarenvio', component: Visualizarenvio }
];