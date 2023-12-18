import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
      this.carouselInfo.text = 'An ecommerce service';
    }
    if (eve.current == 'ngb-slide-2') {
      this.carouselInfo.title = 'Spring Restaurant';
      this.carouselInfo.text = 'An hotel in goa';
    }
  }
}
