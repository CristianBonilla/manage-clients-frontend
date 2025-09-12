import { clientsFeatureKey } from '@modules/clients/store';
import { ClientState } from '@modules/clients/store/reducers/client.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const clientsRootSelector = createFeatureSelector<ClientState>(clientsFeatureKey);

export const getClientSelector = createSelector(clientsRootSelector, state => state.client);

export const getErrorSelector = createSelector(clientsRootSelector, state => state.error);

export const isLoadingSelector = createSelector(clientsRootSelector, state => state.loading);
