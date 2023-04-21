import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  mailText: string = "";

  constructor() { }

  ngOnInit(): void {
    this.mailText = "mailto:sahanahnayak5@gmail.com";
  }

}
