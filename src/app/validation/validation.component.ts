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
        console.log('%c`Validation Message` component', 'background: green; color: white; display: block; padding: 2px 10px; font-size: 15px;');
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