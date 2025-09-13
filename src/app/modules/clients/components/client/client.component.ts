import { Component, Input } from '@angular/core';
import { ClientResponse } from '@modules/clients/models/client';

@Component({
  selector: 'mcf-client',
  templateUrl: './client.component.html',
  styles: ``
})
export class ClientComponent {
  @Input()
  client!: ClientResponse;
}
