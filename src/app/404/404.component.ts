import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: "404.component.html"
})

export class NoContentComponent {

    ngOnInit() {
      console.log('%c`Not-Found` component', 'background: green; color: white; display: block; padding: 2px 10px; font-size: 15px;');
    }
}