import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { LoggedInGuard } from './app-services/logged-in.guard';
import { Http, Response } from '@angular/http';

//Platform and Environment providers/directives/pipes
import { ENV_PROVIDERS } from './environment';
import { routing, appRoutingProviders } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';
import { AppState, InternalStateType } from './app.service';

// App modules
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { NoContentModule } from './404/no.content.module';
import { AuthenticationModule } from './authentication/authentication.module';

// internationalization
import { TranslateModule, TranslateLoader } from 'ng2-translate';
import { createTranslateLoader } from "./functions";

// Application wide providers
const APP_PROVIDERS = [
    AppState,
    appRoutingProviders,
    LoggedInGuard
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};



// AppModule` is the main entry point into Angular2's bootstraping process
@NgModule({
  declarations: [ AppComponent ],
  imports: [ 
    // import Angular's modules
    BrowserModule,
    HttpModule,
    routing,

    TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http] 
    }),

    //application modules
    AuthenticationModule,
    NoContentModule,
    AboutModule,
    HomeModule
  ],
  providers: [ 
    // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

