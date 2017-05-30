import template from './banque.component.html'
import css from './banque.component.css'

class controller {

    $onChanges () {
        this.client = angular.copy(this.client);
    }
}

export let BanqueComponent = {
    template,
    controller,
    bindings: {
        client: '<'
    }
}
