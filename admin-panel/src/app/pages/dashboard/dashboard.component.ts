import { Component } from '@angular/core';
import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

interface UserAlert {
    id: string;
    category: string;
    text: string;
}

class UserComment {
    id: string;
    category: string;
    text: string;
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
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        ],
        zoom: 12,
        center: L.latLng({ lat: 50.8660773, lng: 20.6285677 }),
    };

    constructor() {
        this.alerts = [
            {
                id: '1',
                category: 'TEST',
                text: 'testowe zgłoszenie',
            },
            {
                id: '2',
                category: 'TEST 2',
                text: 'testowe zgłoszenie 2',
            },
            {
                id: '1',
                category: 'TEST',
                text: 'testowe zgłoszenie',
            },
            {
                id: '2',
                category: 'TEST 2',
                text: 'testowe zgłoszenie 2',
            },
        ];

        this.comments = [
            {
                id: '1',
                category: 'TEST',
                text: 'testowy komentarz',
            },
            {
                id: '2',
                category: 'TEST 2',
                text: 'testowy komentarz 2',
            },
            {
                id: '1',
                category: 'TEST',
                text: 'testowy komentarz',
            },
            {
                id: '2',
                category: 'TEST 2',
                text: 'testowy komentarz 2',
            },
        ];
    }
}
