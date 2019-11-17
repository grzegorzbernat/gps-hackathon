import {Injectable} from '@angular/core';

@Injectable()
export class LocationsService {

    data = [{
        id: 1,
        type: 'biblioteka',
        name: 'Biblioteka Główna Politechniki Świętokrzyskiej',
        address: 'Kielce'
    }, {
        id: 2,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 3',
        address: 'Kielce'
    }, {
        id: 3,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 4',
        address: 'Kielce'
    }, {
        id: 4,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 5',
        address: 'Kielce'
    }, {
        id: 5,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 6',
        address: 'Kielce'
    }, {
        id: 6,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 7',
        address: 'Kielce'
    }, {
        id: 7,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 8',
        address: 'Kielce'
    }, {
        id: 8,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 9',
        address: 'Kielce'
    }, {
        id: 9,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 10',
        address: 'Kielce'
    }, {
        id: 10,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 11',
        address: 'Kielce'
    },{
        id: 1,
        type: 'biblioteka',
        name: 'Biblioteka Główna Politechniki Świętokrzyskiej',
        address: 'Kielce'
    }, {
        id: 2,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 3',
        address: 'Kielce'
    }, {
        id: 3,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 4',
        address: 'Kielce'
    }, {
        id: 4,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 5',
        address: 'Kielce'
    }, {
        id: 5,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 6',
        address: 'Kielce'
    }, {
        id: 6,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 7',
        address: 'Kielce'
    }, {
        id: 7,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 8',
        address: 'Kielce'
    }, {
        id: 8,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 9',
        address: 'Kielce'
    }, {
        id: 9,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 10',
        address: 'Kielce'
    }, {
        id: 10,
        type: 'biblioteka',
        name: 'Biblioteka - Filia Nr 11',
        address: 'Kielce'
    }];

    getData() {
        return this.data;
    }
}
