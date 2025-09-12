import { inject, Injectable } from '@angular/core';
import { DEFAULT_WAIT } from '@modules/clients/constants/client.constants';
import { ClientService } from '@modules/clients/services/client.service';
import { getClientAction, getClientFailureAction, getClientSuccessAction } from '@modules/clients/store/actions/client.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, of, switchMap, timer } from 'rxjs';

@Injectable()
export class ClientEffects {
  #actions$ = inject(Actions);
  #service = inject(ClientService);

  getClient$ = createEffect(() => this.#actions$
    .pipe(
      ofType(getClientAction),
      switchMap(({ documentNumber }) => this.#service.getClientByDocumentNumber(documentNumber)
        .pipe(
          delay(DEFAULT_WAIT),
          map(client => getClientSuccessAction({ client })),
          catchError(httpError => {
            const error = httpError.error ?? httpError;

            return timer(DEFAULT_WAIT)
              .pipe(
                mergeMap(_ => of(getClientFailureAction({
                  error: { ...error }
                })))
              );
          })
        ))
    ));
}
