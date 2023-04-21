import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(2000, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],

})
export class ExperienceComponent implements OnInit {

  timeLine = [
    {
      company: 'Flipkart Internet Pvt Ltd',
      role: 'AD-OPERATIONS',
      year: 'April 2022 - March 2023',
      detail: [
        'QA, troubleshooting and traffic 1P',
        'Monitor campaigns throughout the lifecycle, communicating with Sales and Ads Planning',
        'Facilitating Sales, Sales Ops and Brands in determining the Target Audience and Cohorts to enhance performance yielding a good ROI.',
        `Handling multiple functions including technical tasks, project management and budgeting`
      ]
    },

    {
      company: 'Edureka',
      role: 'INSIDE SALES MANAGER',
      year: 'May 2021- April 2022',
      detail: [
        'QA, troubleshooting aGenerate revenue and make a huge impact in Edureka’s growth, by developing/ maintaining customer relationships and positioning Edureka’s products in the marketnd traffic 1P',
        'Inbound and Outbound customer calls and convert them into sales',
        'Maintain, build and update calling/ mailing databases. Research on different tools to increase sales and business opportunities',
        `Demonstrate initiatives for reﬁnement and strengthening of an existing product`
      ]
    },


  ]


  constructor() { }

  ngOnInit(): void {
  }


  logAnimation(_event: any) {
    console.log(_event)
  }

}
