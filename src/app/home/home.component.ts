import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  // Set our default values
  localState = { value: '' };
  
  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('`Home` component');
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
