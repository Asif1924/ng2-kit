import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: "about.component.html",
})

export class AboutComponent {
  
  constructor() {

  }

  ngOnInit() {
      console.log('`About` component');
  }
}
