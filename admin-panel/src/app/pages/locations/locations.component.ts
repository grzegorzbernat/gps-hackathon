import {Component} from '@angular/core';
import 'style-loader!leaflet/dist/leaflet.css';
import {LocalDataSource} from 'ng2-smart-table';
import {LocationsService} from '../../@core/services/locations.service';

@Component({
  selector: 'pk-locations',
    styleUrls: ['locations.component.scss'],
    templateUrl: './locations.component.html',
})
export class LocationsComponent {
    settings = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            id: {
                title: 'ID',
                type: 'number',
            },
            type: {
                title: 'Typ',
                type: 'string',
            },
            name: {
                title: 'Nazwa',
                type: 'string',
            },
            address: {
                title: 'Adres',
                type: 'string',
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();
    //
    constructor(private service: LocationsService) {
        const data = this.service.getData();
        this.source.load(data);
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}

