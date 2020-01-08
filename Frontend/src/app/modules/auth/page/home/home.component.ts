import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  submitted = false;
  contactForm: FormGroup;

  constructor(
    private router: Router,
    private HomeService: HomeService,
    public fb: FormBuilder,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.mainForm();
  }

  mainForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]
      ],
      contact: ['', [Validators.required]]
    });
  }

  // Getter to access form control
  get myForm() {
    return this.contactForm.controls;
  }

  contactUs() {
    this.submitted = true;
    if (!this.contactForm.valid) {
      return false;
    } else {
      this.HomeService.createContact(this.contactForm.value).subscribe(
        res => {
          console.log('Contact Us successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/contact-list'));
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  login() {
    this.router.navigate(['/auth/login']);
  }

  indian() {
    this.router.navigate(['indian']);
  }
  chinese() {
    this.router.navigate(['chinese']);
  }
  american() {
    this.router.navigate(['american']);
  }
}
