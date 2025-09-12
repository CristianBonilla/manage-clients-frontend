import { ClientState, reducer as clientReducer } from '@modules/clients/store/reducers/client.reducer';
import { ActionReducer } from '@ngrx/store';

export const clientsFeatureKey = 'clients';

export const reducer: ActionReducer<ClientState> = clientReducer;
