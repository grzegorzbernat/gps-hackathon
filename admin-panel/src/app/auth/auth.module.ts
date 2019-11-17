import {NgModule} from '@angular/core';
import {
    NbActionsModule,
    NbAlertModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbContextMenuModule,
    NbIconModule,
    NbInputModule, NbLayoutModule,
    NbListModule,
    NbMenuModule,
    NbPopoverModule,
    NbRouteTabsetModule,
    NbSearchModule,
    NbSidebarModule, NbTabsetModule,
    NbThemeModule,
    NbUserModule,
} from '@nebular/theme';

import {Ng2SmartTableModule} from 'ng2-smart-table';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemeModule} from '../@theme/theme.module';

@NgModule({
    imports: [
        NbCardModule,
        NbListModule,
        ThemeModule,
        FormsModule,
        ReactiveFormsModule,
        NbButtonModule,
        NbCardModule,
        NbIconModule,
        NbInputModule,
        NbAlertModule,
        NbActionsModule,
        NbCardModule,
        NbLayoutModule,
        NbMenuModule,
        NbRouteTabsetModule,
        NbSearchModule,
        NbSidebarModule,
        NbTabsetModule,
        NbThemeModule,
        NbUserModule,
        NbCheckboxModule,
        NbPopoverModule,
        NbContextMenuModule,
        NbCheckboxModule,
        Ng2SmartTableModule,
    ],
    declarations: [
        LoginComponent,
    ],
})
export class AuthModule {
}
