import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap, delay, finalize, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;
  isLoading: boolean;
  loginForm: FormGroup;
  apiUrl = "http://dummy.restapiexample.com/api/v1/employees";
  private result:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private http:HttpClient

  ) {
    this.buildForm();
  }

  ngOnInit() {}

  get f() {
    return this.loginForm.controls;
  }

  login() {

    const request = {
      username: 'Mathis',
      password: '12345',
    };


    this.isLoading = true;

    const credentials = this.loginForm.value;

    this.http.post<any[]>(this.apiUrl,request)
    .subscribe(data => {
      this.result = data
    });

    // this.authService
    //   .login(credentials)
    //   .pipe(
    //     delay(5000),
    //     tap(user => this.router.navigate(['/home/home'])),
    //     finalize(() => (this.isLoading = false)),
    //     catchError(error => of((this.error = error)))
    //   )
    //   .subscribe();


  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
