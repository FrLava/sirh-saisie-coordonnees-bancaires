const API_URL = 'http://localhost:8080/sgp/api/departements'

export class DepartementService {
    constructor ($http, $q) {
        this.$http = $http
        this.$q = $q
        this.dep = []
    }

    // return promise of client
    getDepartement () {
        if (this.dep.length !== 0) {
            return this.$q.resolve(this.dep)
        }

        return this.$http.get(API_URL)
        .then(response => response.data)
        .then(dep => {
            this.dep = dep
            console.log(this.dep)
            return dep
        })
    }
}

// PRIVATE

// en entrée : [{ id: number, name: string }]
// en sortie : [name]
function toStringDepartement (dep) {
    return dep.map(dep => dep.nom)
}