const API_URL = 'http://localhost:8080/sgp/api/collaborateurs'

export class ClientService {
    constructor ($http, $q) {
        this.$http = $http
        this.$q = $q
        this.client = []
    }

    // return promise of client
    getClient () {
        if (this.client.length !== 0) {
            return this.$q.resolve(this.client)
        }

        return this.$http.get(API_URL)
        .then(response => response.data)
        .then(client => {
            this.client = client
            return client
        })
    }
}

// PRIVATE

// en entrée : [{ id: number, name: string }]
// en sortie : [name]
function toStringclient (client) {
    return client.map(client => client.nom)
}






