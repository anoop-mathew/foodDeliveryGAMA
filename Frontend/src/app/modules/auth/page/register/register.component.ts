import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SignupService } from '@app/service/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  signupForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private SignupService:SignupService
  ) {}

  ngOnInit() {
    this.mainForm();
  }

  mainForm() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      moblie: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      username: ['', [ Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required]]
    })
  } 
  
  get myForm(){
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.signupForm.valid) {
      return false;
    } else {
      this.SignupService.createUser(this.signupForm.value).subscribe(
        (res) => {
          console.log('Signup successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/auth/login'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
