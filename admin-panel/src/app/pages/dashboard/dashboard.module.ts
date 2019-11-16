import { NgModule } from '@angular/core';
import {NbButtonModule, NbCardModule, NbListModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    NbCardModule,
    NbListModule,
    ThemeModule,
    NbButtonModule,
    LeafletModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
