import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { AuthenticationComponent } from './authentication.component';

describe('authentication', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    
  }));

  it('should log ngOnInit', inject([AuthenticationComponent], (authentication: AuthenticationComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    authentication.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
