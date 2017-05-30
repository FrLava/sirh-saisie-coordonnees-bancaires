import template from './filtre.component.html'

class controller {

    constructor ($interval) {
       
    }

    $onInit () {
        this.dep = angular.copy(this.dep)
    }
}

export let FiltreComponent = {
    controller,
    template,
    bindings: {
        dep: '<',
    }
}
