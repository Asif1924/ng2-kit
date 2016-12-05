import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from './../application-services/validation.service';
import { AuthenticationService } from './../application-services/authentication-service';

@Component({
    moduleId: module.id,
    templateUrl: "authentication.html",
    styleUrls: ['authentication.scss']
})

export class AuthenticationComponent {
    public authenticationForm: FormGroup;
    public validateStatus = true;

    constructor(private _fb: FormBuilder, private userService: AuthenticationService, private router: Router) {}

    ngOnInit() {
        this.authenticationForm = new FormGroup({
            email       : new FormControl('', [<any>Validators.required, ValidationService.emailValidator]),
            password    : new FormControl('', [<any>Validators.required, ValidationService.passwordValidator])
        });
    }

    onSubmit(form): void {
        var result = this.userService.login(form.email, form.password);

        if (result) {
            this.validateStatus = true;
            this.router.navigate(['']);
        } else {
            this.validateStatus = false;
        }
        console.log(this.authenticationForm.value, result, this.validateStatus);
        // this.userService.login(email, password).subscribe((result) => {
        //     if (result) {
        //         this.router.navigate(['']);
        //     }
        // });
    }
}