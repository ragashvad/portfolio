import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnChanges {
  isStart = false;
  res: Observable<null | string> = of(null);
  loadingPercent = [0, 0, 0, 0, 0, 0];
  intervalId = {} as any;
  @Input() triggerAnimation = false
  skills = [
    {
      name: 'Display Ads , Stores',
      percentage: 100
    },
    {
      name: 'Ad traﬃcking',
      percentage: 80
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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.triggerAnimation) {
      this.startLoading()
    }
  }

  startLoading() {
    this.isStart = true;
    this.skills.forEach((item: any, i) => {
      this.intervalId = setInterval(() => {
        if (this.loadingPercent[i] < item.percentage) {
          this.loadingPercent[i] += 1;
        }
      }, 20);
    })

  }

  progressInLoading(i: number) {
    if (this.loadingPercent[i] === 100) {
      clearInterval(this.intervalId);
      this.res = of("Item Loaded");
    }
    console.log('Loading: ' + this.loadingPercent + '% completed.');
  }


}
