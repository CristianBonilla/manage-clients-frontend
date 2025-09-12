import { ClientResponse } from '@modules/clients/models/client';
import { createAction, props } from '@ngrx/store';

export enum CLIENTS_ACTIONS {
  GET_CLIENT = '[Clients/Store] Get Client',
  GET_CLIENT_FAILURE = '[Clients/API] Get Client Failure',
  GET_CLIENT_SUCESS = '[Clients/API] Get Client Success'
}

export const getClientAction = createAction(
  CLIENTS_ACTIONS.GET_CLIENT,
  props<{ documentNumber: string }>()
);
export const getClientFailureAction = createAction(
  CLIENTS_ACTIONS.GET_CLIENT_FAILURE,
  props<{ error: any }>()
);
export const getClientSuccessAction = createAction(
  CLIENTS_ACTIONS.GET_CLIENT_SUCESS,
  props<{ client: ClientResponse }>()
);
