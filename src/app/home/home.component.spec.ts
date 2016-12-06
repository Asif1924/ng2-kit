import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http } from '@angular/http';
import { TranslateService, TranslateModule, TranslateLoader, TranslateParser } from 'ng2-translate';

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { HomeComponent } from './home.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      TranslateService, TranslateModule, TranslateLoader, TranslateParser,
      AppState,
      HomeComponent
    ]
  }));

  it('should have default data', inject([ HomeComponent ], (home: HomeComponent) => {
    expect(home.localState).toEqual({ value: '' });
  }));

  it('should log ngOnInit', inject([ HomeComponent ], (home: HomeComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
