import './clients.component.css'
import template from './clients.component.html'

class controller {

    $onInit () {
        this.client = angular.copy(this.client)
    }

    select (client) {
        this.onSelect({
            $event: client
        })
    }

}

export let ClientsComponent = {
    template,
    controller,
    bindings: {
        client: '<',
        onSelect: '&'
    }
}
