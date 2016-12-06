import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { NoContentComponent } from './404.component';

describe('404', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    
  }));

  it('should log ngOnInit', inject([NoContentComponent], (notfound: NoContentComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    notfound.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
