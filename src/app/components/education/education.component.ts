import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education = {
    year: '2015-2019',
    degree: 'Bachelor of Engineering',
    college: 'JSS University',
    course: 'Construction Technology and Management'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
