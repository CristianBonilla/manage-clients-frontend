import { ClientResponse } from '@modules/clients/models/client';
import { getClientAction, getClientFailureAction, getClientSuccessAction } from '@modules/clients/store/actions/client.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface ClientState {
  client: ClientResponse | null;
  error: any;
  loading: boolean;
}

export const initialState: ClientState = {
  client: null,
  error: null,
  loading: false
};

const clientReducer = createReducer(
  initialState,
  on(getClientAction, state => ({
    ...state,
    loading: true
  })),
  on(getClientFailureAction, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(getClientSuccessAction, (state, { client }) => ({
    ...state,
    client,
    error: null,
    loading: false
  }))
);

export function reducer(state: ClientState | undefined, action: Action) {
  return clientReducer(state, action);
}
