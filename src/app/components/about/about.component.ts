import { Component, OnInit } from '@angular/core';



const basicInfo = [
  {
    id: "Date of Birth",
    value: "14 April 1997"
  },
  {
    id: "Email",
    value: "sahanahnayak5@gmail.com"
  },
  {
    id: "Mobile number",
    value: "9916607693"
  },
  {
    id: "Location",
    value: "Mysore, Karnataka"
  }
]

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  basicInfo = basicInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
