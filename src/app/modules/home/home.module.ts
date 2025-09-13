import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToggleSidebarDirective } from '@modules/home/directives/toggle-sidebar/toggle-sidebar.directive';
import { HomeRoutingModule } from '@modules/home/home-routing.module';
import { IconsModule } from '@shared/icons/icons.module';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

import { FooterComponent } from '@modules/home/components/footer/footer.component';
import { NavbarComponent } from '@modules/home/components/navbar/navbar.component';
import { SidebarWrapperComponent } from '@modules/home/components/sidebar/sidebar-wrapper/sidebar-wrapper.component';
import { SidebarComponent } from '@modules/home/components/sidebar/sidebar.component';
import { HomeComponent } from '@modules/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ToggleSidebarDirective,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarWrapperComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconsModule,
    OverlayscrollbarsModule
  ]
})
export class HomeModule { }
