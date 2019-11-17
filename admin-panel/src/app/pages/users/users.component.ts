import {Component} from '@angular/core';
import 'style-loader!leaflet/dist/leaflet.css';
import { LocalDataSource } from 'ng2-smart-table';
import {SmartTableService} from '../../@core/services/smart-table.service';

@Component({
  selector: 'pk-users',
    styleUrls: ['users.component.scss'],
    templateUrl: './users.component.html',
})
export class UsersComponent {
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
            firstName: {
                title: 'Imię',
                type: 'string',
            },
            lastName: {
                title: 'Nazwisko',
                type: 'string',
            },
            username: {
                title: 'Nazwa użytkownika',
                type: 'string',
            },
            email: {
                title: 'Email',
                type: 'string',
            },
            age: {
                title: 'Wiek',
                type: 'number',
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();
    //
    constructor(private service: SmartTableService) {
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
