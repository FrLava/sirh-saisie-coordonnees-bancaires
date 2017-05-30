//import './game.component.css'
import template from './sgp.component.html'

class controller {
    constructor (ClientService,DepartementService, $location) {
        this.$location=$location
        this.DepartementService=DepartementService
        this.ClientService = ClientService
    }

    $onInit () {
        this.ClientService.getClient()
        .then(client => this.client = client)

        this.DepartementService.getDepartement()
        .then(dep => this.dep = dep)

    }
}

export let SgpComponent = {
    template,
    controller,
    bindings: {

    }
}
