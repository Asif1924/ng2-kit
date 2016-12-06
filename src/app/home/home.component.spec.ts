import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { HomeComponent } from './home.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    
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
