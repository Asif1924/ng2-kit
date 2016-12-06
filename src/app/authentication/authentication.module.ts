import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationService } from './../app-services/authentication-service';
import { ValidationMessages } from './../validation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ AuthenticationComponent, ValidationMessages ],
  exports: [ AuthenticationComponent ],
  providers:[ AuthenticationService, FormBuilder ]
})

export class AuthenticationModule { }