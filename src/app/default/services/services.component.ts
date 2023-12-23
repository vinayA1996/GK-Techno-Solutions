import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [
    trigger('cardStagger', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ transform: 'translateX(-100%)', opacity: 0 }),
            stagger(100, [
              animate(
                '500ms ease-out',
                style({ transform: 'translateX(0)', opacity: 1 })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: ElementRef;
  ngOnInit(): void {
    const container = this.el.nativeElement.querySelector('.container');
    if (container) {
      this.renderer.setProperty(container, 'scrollTop', 0);
    }
    this.scrollToTop1();
  }
  ngAfterViewInit() {
    // Scroll to the top when the component is initialized
    this.scrollToTop();
  }
  scrollToTop() {
    if (this.container) {
      this.container.nativeElement.scrollTop = 0;
    }
  }
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  cardInfo = [
    {
      title: 'Gk Music',
      text: 'Your go-to for top-notch music production and audio services, turning your musical vision into reality.',
      imgLink: '/assets/images/gkmusic.jpg',
      link: 'http://www.gkmusic.in',
    },
    {
      title: 'Gk Dukaan',
      text: 'Gkdukaan is a dynamic multi-vendor e-commerce platform, offering a wide range of products for online purchase.',
      imgLink: '/assets/images/gkdukaan.jpg',
      link: 'http://www.gkdukaan.com',
    },
    {
      title: 'Spring Hotel',
      text: "Experience the charm of Goa's vibrant harbour with us! 🌊 Our hotel, offers you the perfect base within walking distance of major attractions. ",
      imgLink: '/assets/images/springs.jpg',
      link: '',
    },
  ];

  scrollToTop1() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}
