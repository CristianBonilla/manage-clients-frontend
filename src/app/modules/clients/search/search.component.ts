import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { onlyNumbers } from '@helpers/validators/formats.validator';
import { getClientAction } from '@modules/clients/store/actions/client.actions';
import { ClientState } from '@modules/clients/store/reducers/client.reducer';
import { getClientSelector, getErrorSelector, isLoadingSelector } from '@modules/clients/store/selectors/client.selectors';
import { Store } from '@ngrx/store';
import { ActiveToast, ToastrService } from 'ngx-toastr';
import { filter, take, zip } from 'rxjs';

@Component({
  selector: 'mcf-search',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {
  #store = inject(Store<ClientState>);
  #toastr = inject(ToastrService);
  #formBuilder = inject(FormBuilder);
  textControl = new FormControl('', { nonNullable: true });
  readonly searchForm = this.#formBuilder.nonNullable.group({
    documentNumber: ['', [Validators.minLength(3), Validators.maxLength(20), onlyNumbers]]
  });
  client$ = this.#store.select(getClientSelector);
  loading$ = this.#store.select(isLoadingSelector);
  error$ = this.#store.select(getErrorSelector);
  currentDocumentNumber!: string;
  currentToastId!: number;

  get documentNumberControl() {
    return this.searchForm.controls.documentNumber;
  }

  get isSameDocumentNumber() {
    return this.currentDocumentNumber === this.documentNumberControl.value;
  }

  searchClient() {
    const documentNumber = this.documentNumberControl.value;
    if (this.searchForm.invalid || !documentNumber.trim()) {
      return;
    }
    if (!!this.currentToastId) {
      this.#toastr.clear(this.currentToastId);
    }
    this.#store.dispatch(getClientAction({ documentNumber }));
    zip([
      this.loading$,
      this.error$
    ]).pipe(
      filter(([ loading ]) => !loading),
      take(1)
    ).subscribe(([_, error]) => {
      let activatedToast: ActiveToast<any>;
      if (error !== null) {
        activatedToast = this.#toastr.error(
          `Se presento un error al obtener el cliente`,
          error!.errors[0]
        );
      } else {
        activatedToast = this.#toastr.success(
          `Datos del cliente cargados con éxito`,
          `Número de documento: ${documentNumber}`
        );
      }
      this.currentToastId = activatedToast.toastId;
    });
    this.currentDocumentNumber = documentNumber;
  }
}
