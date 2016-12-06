import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { ValidationMessagesComponent } from './validation.component';

describe('404', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ValidationMessagesComponent ]
  }));

  it('should log ngOnInit', inject([ValidationMessagesComponent], (notfound: ValidationMessagesComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    notfound.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
