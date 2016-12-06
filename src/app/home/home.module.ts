import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Http, Response } from '@angular/http';

// internationalization
import { TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './../assets/i18n', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http] 
    }),
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})

export class HomeModule { }