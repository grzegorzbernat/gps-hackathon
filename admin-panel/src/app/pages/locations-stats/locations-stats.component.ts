import {Component} from '@angular/core';
import 'style-loader!leaflet/dist/leaflet.css';
import {LocalDataSource} from 'ng2-smart-table';

interface LocationStat {
    name: string;
    type?: string;
    value: string;
}

@Component({
    selector: 'pk-locations-stats',
    styleUrls: ['locations-stats.component.scss'],
    templateUrl: './locations-stats.component.html',
})
export class LocationsStatsComponent {
    data: LocationStat[];

    source: LocalDataSource = new LocalDataSource();

    constructor() {
        this.data = [
            {
                name: '',
                value: '4',
            },
            {
                name: '',
                value: '3',
            },
            {
                name: '',
                value: '1',
            },
            {
                name: '',
                value: '-5',
            },
            {
                name: '',
                value: '1',
            },
            {
                name: '',
                value: '-2',
            },
            {
                name: '',
                value: '3',
            },
            {
                name: '',
                value: '0',
            },
            {
                name: '',
                value: '1',
            },
        ];
    }

}

