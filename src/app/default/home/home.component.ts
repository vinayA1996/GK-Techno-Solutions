import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('slideLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(-50px)' })),
      state('*', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', animate('500ms ease-out')),
    ]),
    trigger('slideRight', [
      state('void', style({ opacity: 0, transform: 'translateX(50px)' })),
      state('*', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', animate('500ms ease-out')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.scrollToTop();
  }
  isScrolled: boolean = false;
  public infoAnimated = false;
  public imgAnimated = false;
  scrollPosition: number = 0;
  carouselInfo = {
    title: 'Gk Music',
    text: 'Your go-to for top-notch music production and audio services, turning your musical vision into reality.',
  };

  doneSlide(eve: any) {
    if (eve.current == 'ngb-slide-0') {
      this.carouselInfo.title = 'Gk Music';
      this.carouselInfo.text =
        'Your go-to for top-notch music production and audio services, turning your musical vision into reality.';
    }
    if (eve.current == 'ngb-slide-1') {
      this.carouselInfo.title = 'Gk Dukaan';
      this.carouselInfo.text =
        'Gkdukaan is a dynamic multi-vendor e-commerce platform, offering a wide range of products for online purchase';
    }
    if (eve.current == 'ngb-slide-2') {
      this.carouselInfo.title = 'Spring Hotel';
      this.carouselInfo.text =
        "Experience the charm of Goa's vibrant harbour with us! 🌊 Our hotel, nestled in the heart of Goa";
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
  }

  getBackgroundOpacity() {
    return Math.min(this.scrollPosition / 1500, 1);
  }
  scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}
