import { Auditable } from '@modules/clients/models/auditable';

export interface Client extends Auditable {
  documentNumber: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface ClientRequest extends Client {}

export interface ClientResponse extends Client {
  clientId: string;
}
