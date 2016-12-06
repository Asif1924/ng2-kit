import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { ConnectionBackend, Http } from '@angular/http';

// Load the implementations that should be tested
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from './../app-services/authentication-service';

describe('authentication', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ AuthenticationComponent, AuthenticationService, Http, ConnectionBackend ]
  }));

  // it('should log ngOnInit', inject([AuthenticationComponent], (authentication: AuthenticationComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   authentication.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
