import {AfterViewInit, Component} from '@angular/core';
import 'style-loader!leaflet/dist/leaflet.css';
import * as L from 'leaflet';

@Component({
    selector: 'pk-user-alert',
    styleUrls: ['user-alert.component.scss'],
    templateUrl: './user-alert.component.html',
})
export class UserAlertComponent implements AfterViewInit {
    private map;

    options = {
        layers: [
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'}),
        ],
        zoom: 12,
        center: L.latLng({lat: 50.8660773, lng: 20.6285677}),
    };

    constructor() {
    }

}

