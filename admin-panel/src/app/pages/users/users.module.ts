import { NgModule } from '@angular/core';
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UsersComponent } from './users.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {Ng2SmartTableModule} from 'ng2-smart-table';

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
  ],
  declarations: [
    UsersComponent,
  ],
})
export class UsersModule { }
