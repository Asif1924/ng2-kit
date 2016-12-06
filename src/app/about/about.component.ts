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
    console.log('%c`About` component', 'background: green; color: white; display: block; padding: 2px 10px; font-size: 15px;');
  }
}
