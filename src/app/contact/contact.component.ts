import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [NgSelectModule]
})
export class ContactComponent {

  projectType = [
      { id: 1, name: 'Web App Development' },
      { id: 2, name: 'Website Development' },
      { id: 3, name: 'OpProduct Strategy & Roadmapel' },
      { id: 4, name: 'QA & Automation Testing' },
      { id: 4, name: 'Other' },
  ];

  projectBudget = [
    { id: 1, name: 'Less than $1,000' },
    { id: 2, name: '$1,000 - $5,000' },
    { id: 3, name: '$5,000 - $10,000' },
    { id: 4, name: '$10,000+' },
    { id: 4, name: 'Not Sure Yet' },
  ];
}
