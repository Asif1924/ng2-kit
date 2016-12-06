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
    console.log('%c`Home` component', 'background: green; color: white; display: block; padding: 2px 10px; font-size: 15px;');
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
