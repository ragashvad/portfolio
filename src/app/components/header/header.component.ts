
import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { startWith } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit , OnDestroy{
  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChildren('skills', { read: ElementRef })
  skills: QueryList<ElementRef>;
  triggerAnimation = false

  @ViewChild('skills') skill: ElementRef;
  observer: any;


  constructor() { }

  ngOnInit(): void {

  }


  ngAfterViewInit() {
    const threshold = 0.2; // how much % of the element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("intersecting")
            // run your animation code here
            this.triggerAnimation = true;
            observer.disconnect(); // disconnect if you want to stop observing else it will rerun every time its back in view. Just make sure you disconnect in ngOnDestroy instead
          }
        });
      },
      { threshold }
    );
    observer.observe(this.skill.nativeElement);
  }


  clickHandler() {
    this.sidenav.close();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("scroll more")
      }
    }, options);
  }

  ngOnDestroy(): void {
    
  }


  

}
