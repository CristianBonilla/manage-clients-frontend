import { Component } from '@angular/core';
import { PartialOptions } from 'overlayscrollbars';
import { APP_ROUTES, SIDEBAR_ROUTES } from 'src/app/models/routes';
import { DEFAULT_SCROLLBAR_OPTIONS } from 'src/app/models/scrollbar';

const { HOME: { CLIENTS } } = APP_ROUTES;

@Component({
  selector: 'mcf-sidebar-wrapper',
  templateUrl: './sidebar-wrapper.component.html',
  styles: []
})
export class SidebarWrapperComponent {
  readonly scrollbarOptions: PartialOptions = {
    ...DEFAULT_SCROLLBAR_OPTIONS,
    overflow: {
      x: 'visible-hidden'
    }
  };
  readonly ROUTES = CLIENTS;
}
