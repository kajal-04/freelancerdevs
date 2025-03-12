import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';

import { Discovery, ProjectType } from '../models/enums.model';
import { ContactService } from '../services/contactservice';
import { ContactFormModel } from '../models/contact-form.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [NgIf, NgFor, NgSelectModule, ReactiveFormsModule]
})
export class ContactComponent implements OnInit {
  contactForm!:FormGroup;
  discoveryList: Array<{ id: number, name: string }> = [];
  projectTypeList: Array<{ id: number, name: string }> = [];
  submitted = false;

  isDiscoveryOtherSelected = false;
  validationMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
    ],
    email: [
      { type: 'required', message: 'Email is required' },
    ],
    phone: [
      { type: 'required', message: 'Phone number is required' },
    ],
    projectType: [
      { type: 'required', message: 'Project type is required' },
    ],
    description: [
      { type: 'required', message: 'Project details is required' },
    ],
  }

  constructor(private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {

  }

  ngOnInit() {
    this.initForm();
    this.discoveryList = Discovery.getAll().map(item => ({
      id: item.id as number, 
      name: item.title
    }));

    this.projectTypeList = ProjectType.getAll().map(item => ({
      id: item.id as number, 
      name: item.title
    }));
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(128)]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      companyName: new FormControl(''),
      projectType: new FormControl(null, [Validators.required]),
      description: new FormControl('', [Validators.required]),
      discoveryType: new FormControl(null),
      discoveryTypeDescription: new FormControl('')
    })
  }

  onDiscoveryChange(value: any) {
    this.isDiscoveryOtherSelected = value.id === Discovery.Other;
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.submitted = true;
    if(this.contactForm.valid) {
      const payload: ContactFormModel = this.contactForm.value;
      this.contactService.createContact(payload).subscribe({
        next: (data) => {
          console.log("data saved successfully");
          this.submitted = false;

        }, error: (err) => {
          console.log("error");
          this.submitted = false;
        }
      })
    }
  }
}
