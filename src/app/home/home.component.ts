import { Component } from '@angular/core';
import { AppState } from '../app.service';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  // Set our default values
  localState = { value: '' };

  constructor(
        private translate: TranslateService,
        public appState: AppState
        ) {
            translate.addLangs(["en", "fr"]);
            translate.setDefaultLang('en');

            let browserLang = translate.getBrowserLang();
            translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
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
