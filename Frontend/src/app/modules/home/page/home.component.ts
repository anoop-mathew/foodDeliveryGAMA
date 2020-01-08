import { Component, OnInit, NgZone } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService } from '../../../data/service/project.service';
import { Project } from '../../../data/schema/project';
import { Observable } from 'rxjs';

import { MyModalComponent } from '../modal/my-modal.component';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects$: Observable<Project[]>;

  submitted = false;
  contactForm: FormGroup;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private projectService: ProjectService,
    public fb: FormBuilder,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.loadProjects();
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

  loadProjects() {
    this.projects$ = this.projectService.getAll();
  }

  openMyModal() {
    const modalRef = this.modalService.open(MyModalComponent);
    modalRef.componentInstance.id = 1;
    modalRef.result.then(result => {
      console.log(result);
    });
  }


  indian() {
    this.router.navigate(['food/food-list']);
  }

  chinese() {
    this.router.navigate(['food/food-list']);
  }

  american() {
    this.router.navigate(['food/food-list']);
  }
  
  
  Logout() {
    this.router.navigate(['/auth/login']);
  }
  
}
