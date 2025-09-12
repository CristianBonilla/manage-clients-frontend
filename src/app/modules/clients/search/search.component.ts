import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mcf-search',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {
  textControl = new FormControl('', { nonNullable: true });
}
