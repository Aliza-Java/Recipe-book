import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    isLoginMode: boolean = true;
    isLoading: boolean = false;
    error: string = null;

    constructor(private service: AuthService, private router: Router) { }

    ngOnInit() {
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onHandleError(){
        this.error = null;
    }

    onSubmit(authForm: NgForm) {
        if (!authForm.valid) {
            return;
        }
        const email = authForm.value.email;
        const password = authForm.value.password;

        let authObs: Observable<AuthResponseData>;
        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.service.login(email, password);
        } else {
            authObs =  this.service.signup(email, password)
        }

        authObs.subscribe(resData => {
            console.log(resData);
            this.isLoading = false;
                this.router.navigate(['/recipes']);
            }, errorMessage => {
                this.error = errorMessage;
                this.isLoading = false;
            });
          authForm.reset();
    }
}