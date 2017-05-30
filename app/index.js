import angular from 'angular'
import RouteModule from 'angular-route'
import 'bootstrap/dist/css/bootstrap.css'

import { BurgerService } from './service/burger.service'
import { ClientService } from './service/client.service'
import { DepartementService } from './service/departement.service'

import { SgpComponent } from './sgp/sgp.component'
import { ClientsComponent } from './clients/clients.component'
import { BanqueComponent } from './banque/banque.component'
import { FiltreComponent } from './filtre/filtre.component'
import { routes } from './routes.config'


// Création du module app (application)
angular.module('app', [
    RouteModule
])


.component('sgp', SgpComponent)
.component('sgpClients', ClientsComponent)
.component('sgpBanque', BanqueComponent)
.component('sgpFiltre', FiltreComponent)

.service('BurgerService', BurgerService)
.service('ClientService', ClientService)
.service('DepartementService', DepartementService)
.config(routes)
