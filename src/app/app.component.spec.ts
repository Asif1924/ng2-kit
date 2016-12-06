import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested

import { BaseRequestOptions, ConnectionBackend, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppComponent } from './app.component';
import { AppState } from './app.service';
import { AuthenticationService } from './app-services/authentication-service';
import { Router, CanActivate } from '@angular/router';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      AppState,
      AuthenticationService,
      AppComponent,
      Router
    ]
  }));

    // it('should log ngOnInit', inject([AppComponent], (App: AppComponent) => {
    //   spyOn(console, 'log');
    //   expect(console.log).not.toHaveBeenCalled();

    //   App.ngOnInit();
    //   expect(console.log).toHaveBeenCalled();
    // }));
});
