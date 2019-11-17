import {NgModule} from '@angular/core';
import {NbListModule, NbMenuModule} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {UsersModule} from './users/users.module';
import {LocationsModule} from './locations/locations.module';
import {LocationsStatsModule} from './locations-stats/locations-stats.module';
import {UserAlertModule} from './user-alert/user-alert.module';

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        NbListModule,
        DashboardModule,
        UsersModule,
        LocationsModule,
        LocationsStatsModule,
        UserAlertModule
    ],
    declarations: [
        PagesComponent,
    ],
})
export class PagesModule {
}
