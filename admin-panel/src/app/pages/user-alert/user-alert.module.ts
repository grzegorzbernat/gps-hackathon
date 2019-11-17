import {NgModule} from '@angular/core';
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule} from '@nebular/theme';

import {ThemeModule} from '../../@theme/theme.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NgxEchartsModule} from 'ngx-echarts';
import {UserAlertComponent} from './user-alert.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        NbCardModule,
        NbListModule,
        ThemeModule,
        NbButtonModule,
        NbCardModule,
        NbIconModule,
        NbInputModule,
        Ng2SmartTableModule,
        NgxEchartsModule,
        NbSelectModule,
        FormsModule,
        ReactiveFormsModule,
        LeafletModule.forRoot(),
    ],
    declarations: [
        UserAlertComponent,
    ],
})
export class UserAlertModule {
}
