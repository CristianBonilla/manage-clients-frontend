import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '@directives/directives.module';
import { ClientsRoutingModule } from '@modules/clients/clients-routing.module';
import { ClientsComponent } from '@modules/clients/clients.component';
import { ClientComponent } from '@modules/clients/components/client/client.component';
import { SearchComponent } from '@modules/clients/components/search/search.component';
import { ClientService } from '@modules/clients/services/client.service';
import { reducer as clientReducer, clientsFeatureKey } from '@modules/clients/store';
import { ClientEffects } from '@modules/clients/store/effects/client.effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IconsModule } from '@shared/icons/icons.module';
import { NgxCurrencyDirective } from 'ngx-currency';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@NgModule({
  declarations: [
    ClientsComponent,
    SearchComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    EffectsModule.forFeature([ClientEffects]),
    StoreModule.forFeature(clientsFeatureKey, clientReducer),
    IconsModule,
    OverlayscrollbarsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxTrimDirectiveModule,
    DirectivesModule,
    NgOptimizedImage,
    NgxCurrencyDirective,
  ],
  providers: [
    ClientService
  ]
})
export class ClientsModule { }
