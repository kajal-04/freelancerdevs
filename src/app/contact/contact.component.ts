import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';

import { Discovery, ProjectType } from '../models/enums.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [NgIf, NgSelectModule, ReactiveFormsModule]
})
export class ContactComponent implements OnInit {
  contactForm!:FormGroup;
  discoveryList: Array<{ id: number, name: string }> = [];
  projectTypeList: Array<{ id: number, name: string }> = [];

  isDiscoveryOtherSelected = false;

  constructor(private formBuilder: FormBuilder) {

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
  }
}
