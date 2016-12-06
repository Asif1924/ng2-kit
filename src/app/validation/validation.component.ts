import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './../app-services/validation.service';

@Component({
    selector: 'validation-messages',
    templateUrl: "validation.component.html"
})

export class ValidationMessagesComponent {
    @Input() control: FormControl;
    constructor() { }

    ngOnInit(){
        console.log('`Validation Message` component');
    }

    get errorMessage() {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
        return null;
    }
}