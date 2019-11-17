import {Component} from '@angular/core';
import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

interface UserAlert {
    id: string;
    category: string;
    text: string;
    mark: number;
}

class UserComment {
    id: string;
    category: string;
    text: string;
    mark: number;
}

@Component({
    selector: 'ngx-dashboard',
    styleUrls: ['dashboard.component.scss'],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
    alerts: UserAlert[];
    comments: UserComment[];

    options = {
        layers: [
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'}),
        ],
        zoom: 12,
        center: L.latLng({lat: 50.8660773, lng: 20.6285677}),
    };

    constructor() {
        this.alerts = [
            {
                id: '1',
                category: 'Narząd wzroku',
                text: 'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Nazywał się zabawiać gości obejrzał porządkiem. Bo nie miał wielką, i kobiety żniwo.',
                mark: 4,
            },
            {
                id: '2',
                category: 'Wózek inwalidzki',
                text: 'Napoleon, człek mądry a nic to mówiąc, że okolica obfita we łzach i kobiety żniwo oglądaj pod lasem zwaliska. Po.',
                mark: 2,
            },
            {
                id: '1',
                category: 'Osoba głuchoniema',
                text: 'Suwarów w naszej okolicy lepiej zna równie pędzel, noty, druki. Aż osłupiał Tadeusz Telimenie, lecz patrzył na pacierz w sieni.',
                mark: -2,
            },
            {
                id: '2',
                category: 'Narząd wzroku',
                text: 'Ogiński z Bonapartą. tu mieszkał? Stary stryj nie wyszli witać, ale nigdzie nie jedli. Stojąc i z córkami. Młodzież poszła.',
                mark: -4,
    },
            {
                id: '2',
                category: 'Narząd ruchu',
                text: 'Nogajów! Prześladując w bieg chybkim był tytuł markiza. Jakoż, kiedy do stołu przywoławszy dwie strony: Uciszcie się! woła. Marząc i.',
                mark: 5,
            },
        ];

        this.comments = [
            {
                id: '1',
                category: 'Narząd wzroku',
                text: 'Wdział więc, jak roratne świéce. Pierwsza z Polski trzech mocarzów albo szablą robić. Wiedział, że ją w Niemni i oczy.',
                mark: 4,
            },
            {
                id: '2',
                category: 'Osoba głuchoniema',
                text: 'Twoją opiek ofiarowany, martwą podniosłem powiek i Zabo biegły przed nim na nowo pytania. Cóż złego, że przymiotów jego pamięć.',
                mark: 4,
            },
            {
                id: '1',
                category: 'Narząd wzroku',
                text: 'Kościuszko w grzeczności. a młodzież lepsza, ale myśl twarz od chmielu tyki w języku strzelecki dzik, niedźwiedź, łoś, wilk zwany.',
                mark: 4,
            },
            {
                id: '2',
                category: 'Narząd ruchu',
                text: 'Francuzów sto wozów sieci w nędzy. Jak mnie dziecko do Alpów podniebnych ciskając grom po rodzicach wziął najbliższą sobie. Podkomorzanki.',
                mark: 4,
            },
            {
                id: '2',
                category: 'Wózek inwalidzki',
                text: 'Rejenta, szczuplejszy i jeszcze kołyszą się możemy na partyję Kusego bez przerwy rzecz daléj w porządnym domu, i narody słyną.',
                mark: 4,
            },
        ];
    }
}
