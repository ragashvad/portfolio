import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      name: 'Display Ads , Stores',
      percentage: 90
    },
    {
      name: 'Ad traﬃcking',
      percentage: 40
    },
    {
      name: 'Reporting and Data Management',
      percentage: 80
    },
    {
      name: 'Digital Marketing',
      percentage: 60
    },

    {
      name: 'CM360',
      percentage: 90
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
