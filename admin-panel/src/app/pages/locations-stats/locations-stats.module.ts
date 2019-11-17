import {NgModule} from '@angular/core';
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule} from '@nebular/theme';

import {ThemeModule} from '../../@theme/theme.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {LocationsStatsComponent} from './locations-stats.component';
import {NgxEchartsModule} from 'ngx-echarts';

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
    ],
    declarations: [
        LocationsStatsComponent,
    ],
})
export class LocationsStatsModule {
}
