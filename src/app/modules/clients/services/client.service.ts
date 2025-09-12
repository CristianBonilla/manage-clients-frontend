import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ClientRequest, ClientResponse } from '@modules/clients/models/client';
import { ENDPOINTS } from 'src/app/models/endpoints';

@Injectable()
export class ClientService {
  #http = inject(HttpClient);
  #httpHeaderOptions = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  #clientsEndpointUrl = ENDPOINTS.CLIENTS;

  addClient(client: ClientRequest) {
    const client$ = this.#http.post<ClientResponse>(this.#clientsEndpointUrl.DEFAULT, client, {
      responseType: 'json',
      ...this.#httpHeaderOptions
    });

    return client$;
  }

  updateClient(clientId: string, client: ClientRequest) {
    const client$ = this.#http.put<ClientResponse>(`${this.#clientsEndpointUrl.DEFAULT}/${clientId}`, client, {
      responseType: 'json',
      ...this.#httpHeaderOptions
    });

    return client$;
  }

  deleteClient(clientId: string) {
    const client$ = this.#http.delete<ClientResponse>(`${this.#clientsEndpointUrl.DEFAULT}/${clientId}`, {
      responseType: 'json',
      ...this.#httpHeaderOptions
    });

    return client$;
  }

  getClients() {
    const clients$ = this.#http.get<ClientResponse[]>(this.#clientsEndpointUrl.DEFAULT, {
      responseType: 'json',
      ...this.#httpHeaderOptions
    });

    return clients$;
  }

  getClientById(clientId: string) {
    const client$ = this.#http.get<ClientResponse>(`${this.#clientsEndpointUrl.DEFAULT}/${clientId}`, {
      responseType: 'json',
      ...this.#httpHeaderOptions
    });

    return client$;
  }

  getClientByDocumentNumber(documentNumber: string) {
    const client$ = this.#http.get<ClientResponse>(`${this.#clientsEndpointUrl.DEFAULT}/${documentNumber}`, {
      responseType: 'json',
      ...this.#httpHeaderOptions
    });

    return client$;
  }
}
