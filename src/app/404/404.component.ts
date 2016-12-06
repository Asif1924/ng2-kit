import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: "404.component.html"
})

export class NoContentComponent {

    ngOnInit() {
      console.log('`Not-Found` component');
    }
}