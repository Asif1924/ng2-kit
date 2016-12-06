import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from './app.service';
import { AuthenticationService } from './app-services/authentication-service';

@Component({
  selector: 'app',
  templateUrl: "./app.component.html"
})

export class AppComponent {
    
  constructor(
        private userService: AuthenticationService,
        private router: Router,
        public appState: AppState
        ) {
        console.log("Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here");
    }

    // -----------------------------------------
    // Directive and component change detection and lifecycle
    // -----------------------------------------

    ngOnInit() {
        console.log('Initial App State', this.appState.state);
        // console.log ("Called after the constructor, initializing input properties, and the first call to ngOnChanges");
    }

    ngOnChanges() {
        // console.log ("Called after every change to input properties and before processing content or child views");
    }

    ngDoCheck() {
        //console.log ("Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.");
    }

    ngAfterContentInit() {
        //console.log ("Called after ngOnInit when the component's or directive's content has been initialized");
    }

    ngAfterViewInit() {
        //console.log ("Called after ngAfterContentInit when the component's view has been initialized. Applies to components only");
    }

    ngAfterViewChecked() {
        //console.log ("Called after every check of the component's view. Applies to components only.");
    }

    ngOnDestroy() {
        //console.log ("Called once, before the instance is destroyed");
    }

    // -----------------------------------------
    // Component methods
    // -----------------------------------------

    logOut() {
        this.userService.logout();
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['authentication']);
        }
    }
}
